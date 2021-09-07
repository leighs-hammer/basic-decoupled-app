import React, { useCallback, useEffect, useState } from "react"
import { Tabs } from "@shopify/polaris"
import { useRouter } from "next/dist/client/router"
import {useRoutePropagation} from '@shopify/app-bridge-react'
import TopNavItems, {excludeFromPropogation} from './TopNavItems';

const Navigation = () => {

  const {push, asPath} = useRouter()
  const [selected, setSelected] = useState(0)
  const tabs = TopNavItems

  const handleTabChange = useCallback(
    (selectedTabIndex) => {
        setSelected(selectedTabIndex)
        push(`${TopNavItems[selectedTabIndex].route}`)
      },
      [],
    )

  useRoutePropagation(asPath)
  
  return (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}></Tabs>
  )
}

export default Navigation