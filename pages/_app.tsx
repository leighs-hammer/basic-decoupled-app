import '@shopify/polaris/dist/styles.css'
import enTranslations from '@shopify/polaris/locales/en.json'
import {AppProvider} from '@shopify/polaris'
import {Provider} from '@shopify/app-bridge-react'
import CustomLink from '../components/CustomLink'
import { useRouter } from 'next/dist/client/router'
import Stage from '../components/Stage'
import { useEffect, useState } from 'react'
import AppContextProvider from '../contexts/AppContext';


function DecoupledContainer({ Component, pageProps }) {

  const router = useRouter()
  const {host, shop, state} = router.query

  // store the config for the session. 
  const [config, setConfig] = useState({
    apiKey: process.env.NEXT_PUBLIC_SHOPIFY_APP_KEY,
    host: host ? `${host}` : undefined,
    forceRedirect: true
  })

  // Set the host when available and keep it there.
  useEffect(() => {
    if(config.host !== host) {
      setConfig(Object.assign({}, {...config}, {host: `${host}`}))
    }
  }, [host])

  // 404 and error handling
  if(router.pathname === '/_error') {
    return (<Component {...pageProps} />)
  }

  // Display loading component
  if(!config.host && router.pathname !== '/_error') {
    return (<div></div>)
  }


  // return the app
  return (
    <Provider
      config={config}
    >
      <AppProvider 
        i18n={enTranslations}
        linkComponent={CustomLink}
      >
        <AppContextProvider>
          <Stage>
            <Component {...pageProps} />
          </Stage>
        </AppContextProvider>
      </AppProvider>
    </Provider>
  )
}

export default DecoupledContainer
