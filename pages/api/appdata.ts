import { checkHmacValidity } from 'shopify-hmac-validation'
import { NextApiRequest, NextApiResponse } from "next";
import jwtVerifiedConnection from '../../utility/security/jwtVerifiedConnection';
import { createDBClient } from '../../utility/mongo/creadeDBClient';
import { findOneStoreDocumentById } from '../../utility/mongo/findStoreDocumentById';
import { exchangeToken } from '../../utility/shopify/exchangeToken';
import initialStoreData from '../../initialData/storeInstallData';
import { createStoreDocument } from '../../utility/mongo/createStoreDocument';
import getShopDetails from '../../utility/shopify/getShopData';

const appData = async (req: NextApiRequest, res: NextApiResponse) => {

  const {shop, code} = JSON.parse(req.body)
 
  if(!shop) {
    return res.status(401).json({message: 'No shop provided!'})
  }

  const client = await createDBClient()
  
  try {
    // connect
    await client.connect()
    
    // check if there is a store doc
    const storeDocument = await findOneStoreDocumentById(client, shop)
    
    // have a store doc lets get it back!
    if(storeDocument) {
      return res.status(200).json(Object.assign({},{...storeDocument}, {token: "REDACTED", scopes_at_install: "REDACTED"}))
    }

    // no document no worries lets create one 
    // exchange the code for a token
    if(!code) {
      return res.status(401).json({message: 'No code available to exchange!'})
    }

    const token = await exchangeToken(shop, 
        {
          client_id: process.env.SHOPIFY_APP_KEY,
          client_secret: process.env.SHOPIFY_APP_SECRET,
          code
        })

    console.log(token)
    // get and store shop details and return object
    if(token) {
      const shopDetails = await getShopDetails(shop, token)
      console.log(shopDetails)
      const installObject = Object.assign({}, {...initialStoreData}, {...shopDetails}, {token, _id: shop})
      const storeCreate = await createStoreDocument(client, installObject)
      return res.status(200).json(Object.assign({},{...installObject}, {token: "REDACTED", scopes_at_install: "REDACTED"}))
    }


  } catch (error) {
    // Oh noes!
    console.error(error)
    return res.status(500).json({message: error.message, error: JSON.stringify(error)})

  } finally {
    // close the connenction
    await client.close()
  }
  
}

export default jwtVerifiedConnection(appData)