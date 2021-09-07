import { Card, Page } from "@shopify/polaris";

interface StaticGeneratedProps {
  staticData: { data: string; };
}


const Static: React.FC<StaticGeneratedProps> = ({staticData}) => {
  return (
    <div>
      <Page>
      <Card
          title="Data generated at build time static"
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
            {JSON.stringify(staticData, null, 2)}
          </pre>
        </Card>
      </Page>
    </div>
  )
}



export async function getStaticProps(context) {
  // crappy example as could be an import but here ya go
  const staticData = await(await (fetch(`${process.env.APP_URL}/data/data.json`))).json()
  
  return {
    props: {
      staticData
    }, // will be passed to the page component as props
  }
}

export default Static