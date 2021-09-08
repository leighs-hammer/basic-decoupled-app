import axios from 'axios'
import {MongoClient} from 'mongodb'
import { findOneStoreDocumentById } from '../../utility/mongo/findStoreDocumentById';
import { createDBClient } from '../../utility/mongo/creadeDBClient';
import buildHeaders from '../../utility/shopify/buildHeaders';
import buildGqlEndpoint from '../../utility/shopify/buildGqlEndpoint';
import jwtVerifiedConnection from '../../utility/security/jwtVerifiedConnection';

const query =  async (req, res) => {
  
  // no body sent
  if(!req.body) {
    return res.status(400).json({error: true, message: 'No request submitted for handling.'})
  }
  
  // destructure request body
  const {shop, gql, variables} = JSON.parse(req.body)
  // if (call Auth !== callAuth) {}
  
  // Validate Incoming
  if(!shop || !gql) {
    return res.status(400).json({error: true, message: 'Missing or incorrect parameters supplied'})
  }
  
  const client = createDBClient()
  
  try {
    
    await client.connect()
    
    const storeTokenData = await findOneStoreDocumentById(client, shop)
    
    if(!storeTokenData) {
      return res.status(400).json({error: true, message: 'Missing token from the db'})
    }
    
    const headers = storeTokenData ? buildHeaders(storeTokenData.token) : false
    if(!headers) { return res.status(400).json({error: true, message: 'Headers could not be built'})}
    
    const shopifyResponse = await axios({
      url: buildGqlEndpoint(shop),
      method: 'post',
      data: {
        query: gql,
        variables: variables ? variables : {}
      },
      headers: headers
    })
    
    // Early return 
    if(!shopifyResponse.data) {
      return res.status(417).json({error: true, message: 'Data was not returned from shopify'})
    }


    return res.status(200).json({ ...shopifyResponse.data })
    
  } catch (error) {
    
    console.error(error)
    return res.status(error.status ? error.status : 500).json({
      error: true, 
      message: error.message,
      request: {shop, gql, variables}
    })

  } finally {
    await client.close()
  }

  // If you reached this everything is all apart
  // Status 418 - I am a teapot.
}

export default jwtVerifiedConnection(query)