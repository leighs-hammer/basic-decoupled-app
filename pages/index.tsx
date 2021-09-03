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
          title="Test Card Loaded!"
          sectioned
        >
          <pre>{JSON.stringify(appdata, null, 2)}</pre>
        </Card>
      </Page>
    </div>
  )
}
