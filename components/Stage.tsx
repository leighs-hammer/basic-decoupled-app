import { Card, Page } from "@shopify/polaris"
import React, { ReactChild, ReactChildren, ReactComponentElement } from "react"
import Navigation from "./Navigation/Navigation"

interface StageProps {
  children:  ReactChildren | ReactChild | HTMLElement;
}

const Stage: React.FC<StageProps> = ({children}) => {
  return (
      <React.Fragment>
        <Navigation />
        <Page>
          {children}
        </Page>
      </React.Fragment>
  )
}

export default Stage