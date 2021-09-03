import axios from "axios"

interface IShopifyGetShopDetailsResponse {
  domain: string,
  email: string,
  customerEmail: string,
  name: string,
  shopOwner: string,
  planDisplayName: string,
  planName: string,
  country: string,
}

// show a rest call
const getShopDetails = async (shop, token) => {

  axios.defaults.baseURL = `https://${shop}/admin/api/${process.env.SHOPIFY_API_VERSION}`
  axios.defaults.headers.common['X-Shopify-Access-Token'] = token

  return axios.get('/shop.json').then((response) => {

    const { 
      domain, 
      email, 
      customer_email, 
      name, shop_owner, 
      plan_display_name, 
      plan_name, 
      country } = response.data.shop
    
    const res: IShopifyGetShopDetailsResponse = {
      domain: domain,
      email: email,
      customerEmail: customer_email,
      name: name,
      shopOwner: shop_owner,
      planDisplayName: plan_display_name,
      planName: plan_name,
      country: country,
    }

    return res
  }).catch((error) => {
    console.error(error)
    throw 'Failed to retrieve shop details'
  })
}

export default getShopDetails