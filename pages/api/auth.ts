import { checkHmacValidity } from 'shopify-hmac-validation'
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {


  const shopifyValidity = checkHmacValidity(process.env.SHOPIFY_APP_SECRET, req.query)

  if(!shopifyValidity){
    return res.status(413).json({ message: "Malicious activity detected!"})
  }

  // Build redirect and go there
  const buildAuthUrl = (shop, state) => (`https://${shop}/admin/oauth/authorize?client_id=${process.env.SHOPIFY_APP_KEY}&scope=${process.env.SHOPIFY_APP_SCOPES}&state=${state}&redirect_uri=${process.env.APP_URL}/`)
  
  return res.redirect(buildAuthUrl(req.query.shop, 'NonsenseStartshere'))
  
}
