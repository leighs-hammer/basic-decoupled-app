import React, { useCallback, useEffect, useState } from "react"
import { Tabs } from "@shopify/polaris"
import { useRouter } from "next/dist/client/router"
import {useRoutePropagation} from '@shopify/app-bridge-react'
import TopNavItems, {excludeFromPropogation} from './TopNavItems';

const Navigation = () => {

  const {pathname, push} = useRouter()
  const [selected, setSelected] = useState(0)
  const tabs = TopNavItems

  const handleTabChange = useCallback(
    (selectedTabIndex) => {
        // push(`${TopNavItems[selectedTabIndex].route}`)
        // console.log(TopNavItems[selectedTabIndex].route)
        setSelected(selectedTabIndex)
      },
      [],
    )

  // propogate route to shopify if required.
  useRoutePropagation(pathname)
  
  useEffect(() => {
    const newPath = TopNavItems[selected].route
    if(pathname !== newPath) {
      push(newPath)
    }
  }, [pathname, selected])

  return (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}></Tabs>
  )
}

export default Navigation