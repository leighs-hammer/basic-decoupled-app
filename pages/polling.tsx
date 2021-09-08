import { Card, Page } from "@shopify/polaris";
import { useQuery} from 'react-query'

interface ServerSideProps {
  serverData: { data: string | number; };
}

const ServeSide: React.FC<ServerSideProps> = ({serverData}) => {

  const fetchDataTimeStamp = async () => {
    const response = await(await (fetch(`/api/timestamp`))).json()
    return response.data
  }

  const {data} = useQuery('timestamp', fetchDataTimeStamp, {
    initialData: serverData.data,
    refetchInterval: 1000,
  })


  return (
    <div>
      <Page>
        <Card
          title="Request runs server side then polls for changes"
          sectioned
        >
       
        </Card>
        
        <Card
          title="Polling data"
          sectioned
        >
          <p>Saturated on load from server then polled every one seconds seconds.</p>
          <p>Pretty useful with or without an interval to poll for changes like new orders, products etc etc.</p>
          <pre>
            {JSON.stringify(data, null, 2)}
          </pre>
        </Card>

        <Card
          title="Server side data"
          sectioned
        >
          <p>This data comes in from server side and is then polled for replacement.</p>
          <pre>
            {JSON.stringify(serverData, null, 2)}
          </pre>
        </Card>
      </Page>
    </div>
  )
}

export async function getServerSideProps(context) {

  // Make a request using secure variables here
  const serverData = await(await (fetch(`${process.env.APP_URL}/api/timestamp`))).json()
  
  // pass data back to props
  return {
    props: {
      serverData
    }, // will be passed to the page component as props
  }
}


export default ServeSide
