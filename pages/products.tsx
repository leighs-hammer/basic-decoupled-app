import { Card, Page, Button } from '@shopify/polaris';
import { useQuery} from 'react-query'
import { authFetch, useAppContext } from '../contexts/AppContext';

interface ShopifyRequest {

}

const RequestShopify: React.FC<ShopifyRequest> = ({}) => {

  const app = useAppContext()


  const getShopData = async () => {
    try {
      const query = `query {
        shop {
           name
         }
       }`
  
       // @ts-ignore
       const response = await ( await app.fetch('/api/query', {
         method: 'post',
         body: JSON.stringify({
           // @ts-ignore
          shop: app.appState._id,
          gql: query,
          variables: {}
         })
       })).json()
       console.log(response.data)
      
       return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const {data, isLoading} = useQuery('shop-name', getShopData)


  return (
    <div>
      <Page>
        <Card
          title="Poll the shop name via proxy"
          sectioned
        >
          <p>Request a gql query from frontend securely</p>
          {isLoading && !data && <p>Loading data from shopify</p>}
          {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </Card>
        
      </Page>
    </div>
  )
}



export default RequestShopify
