import { Button, Card, Page } from "@shopify/polaris";
import { useAppBridge } from "@shopify/app-bridge-react"
import { authenticatedFetch } from "@shopify/app-bridge-utils"
import { useRouter } from "next/dist/client/router";
import { useAppContext } from '../contexts/AppContext';

export default function Home() {

  const appdata = useAppContext()

  return (
    <div>
      <Page>
        <Card 
          title="Just a landing page"
          sectioned
        >
          This app does little other than highlight some next js tooling.
        </Card>
        <Card
          title="App context from install or DB loaded decoupled!"
          sectioned
        >
          <pre>{JSON.stringify(appdata, null, 2)}</pre>
        </Card>
      </Page>
    </div>
  )
}
