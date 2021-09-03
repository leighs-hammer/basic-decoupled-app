import { NextApiRequest, NextApiResponse } from 'next';
import isVerified from 'shopify-jwt-auth-verify'

const jwtVerifiedConnection = (handler) => { 

  return async(req: NextApiRequest, res: NextApiResponse) => {

    // The authorization header is required for all requests to the api. 
    if(!req.headers.authorization) {
      res.status(403).json({message: 'No bearer supplied, are you using the correct fetch method'})
    }
    
    const verified = isVerified(req.headers.authorization, process.env.SHOPIFY_APP_SECRET, process.env.SHOPIFY_APP_KEY)
    
    if(!verified) {
      return res.status(401).json({message: 'JWT is invalid.'})
    }
    
    // continue on to the route requested. 
    return handler(req, res)
  }
}

export default jwtVerifiedConnection