import { Card, Page } from "@shopify/polaris";

interface ServerSideProps {
  serverData: { data: string; };
}

const ServeSide: React.FC<ServerSideProps> = ({serverData}) => {
  return (
    <div>
      <Page>
        <Card
          title="Request runs server side pre render"
          sectioned
        >
          <p>To explore more FE -> BE/DB fetching approaches</p>
          <a href="https://nextjs.org/docs/basic-features/data-fetching" target="_blank">Next data fetching docs</a>
        </Card>
        
        <Card
          title="Server side data"
          sectioned
        >
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
  const serverData = await(await (fetch(`${process.env.APP_URL}/api/serverData`))).json()
  
  // pass data back to props
  return {
    props: {
      serverData
    }, // will be passed to the page component as props
  }
}


export default ServeSide
