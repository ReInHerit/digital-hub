import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import EShopDocFeed from "../../components/shared/EShopDocFeed";
import MainHeading from "../../components/static/MainHeading";
import {SSRProvider} from '@react-aria/ssr'

const eShopDoc = () => {
    return (
      <SSRProvider>
      <BaseLayout
      pageTitle="eShop Documentation | ReInHerit Digital Hub"
      >
        <MainHeading subHeading="Documentation about the ReInHerit eShop"
          breadCrumb={[
            {label:"Resources", value:"/resources"},
            {label:"eShop Documentation", value:"/eshopdoc"}
          ]}        
        >eShop Documentation</MainHeading>
    <EShopDocFeed></EShopDocFeed>
  </BaseLayout>
  </SSRProvider>
  )
}

export default eShopDoc;