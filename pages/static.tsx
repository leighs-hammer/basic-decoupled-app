import { Card, Page } from "@shopify/polaris";
import staticData from '../public/data/data.json'
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
          <p>To explore more FE to BE/DB fetching approaches</p>
          <a href="https://nextjs.org/docs/basic-features/data-fetching" target="_blank" rel="noreferrer">Next data fetching docs</a>
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
  // could be a fetch or module import here to get static data.
  return {
    props: {
      staticData
    }, // will be passed to the page component as props
  }
}

export default Static