import { useRouter } from 'next/dist/client/router'
import React, {useContext, useEffect, useState } from 'react'
import { useAppBridge } from '@shopify/app-bridge-react';
import { authenticatedFetch } from '@shopify/app-bridge-utils';

interface IAppContextWrapper {
  children: React.ReactChild | React.ReactElement | React.ReactChildren;
}

export const AppContext = React.createContext({loaded: false, appState: {}, fetch: null})

export const AppContextProvider: React.FC<IAppContextWrapper> = ({children}) => {
  
  const router = useRouter()
  const appBridge = useAppBridge()
  const aFetch = authenticatedFetch(appBridge)

  const [loaded, setLoaded] = useState(false)
  const [appState, setAppState] = useState({})


  const getData = async () => {
    const response = await ( await aFetch('/api/appdata', {
      method: 'POST',
      body: JSON.stringify({...router.query})
    }
    )).json()
    setAppState(response)
    setLoaded(true)
  }

  useEffect(() => {
    if(!loaded) {
      getData()
    }
  }, [loaded])
  
  return (
    <AppContext.Provider value={{loaded, appState, fetch: aFetch}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
export const authFetch = () => useContext(AppContext).fetch

export default AppContextProvider