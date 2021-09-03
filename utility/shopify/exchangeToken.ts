import axios from "axios"
import buildAuthUrl from "./buildAuthUrl"

export const exchangeToken = async (shop, payload) => {
  console.log({shop, payload})
  try {
    const requestData = await axios.post(buildAuthUrl(shop), payload)
    if(!requestData.data.access_token) {return false}
    return requestData.data.access_token
  } catch {
    return false
  }
}