import buildAuthUrl from './buildAuthUrl'
import buildGqlEndpoint from './buildGqlEndpoint'
import buildHeaders from './buildHeaders'
import { exchangeToken } from './exchangeToken'
import getShopDetails from './getShopData'

const shopifyUtilities = {
  buildAuthUrl,
  buildGqlEndpoint,
  buildHeaders,
  exchangeToken,
  getShopDetails
}

export default shopifyUtilities