import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {

  // I could do any secure server to server or straight to data point call here securely passing keys etc without these being surfaced to the front end.
  // these are opten used for sessions, or requesting very route specific data needs.

  return res.status(200).json({data: "I came from the server before the page rendered"})
  
}
