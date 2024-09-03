import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import FirstPerfDocFeed from "../../components/shared/FirstPerfDocFeed";
import MainHeading from "../../components/static/MainHeading";
import {SSRProvider} from '@react-aria/ssr'

const FirstPerfDocPage: React.FC = () => {
  return (
    <SSRProvider>
    <BaseLayout
        pageTitle="Performance at the Hadjigeorgakis Kornesios Mansion || Documentation"
        breadCrumb={[
            {label:"Resources", value:"/resources"}, {label:"First Performance Documentation", value:"/firstperfdoc"},
          ]}    
      >
        <MainHeading subHeading="Documentation of the first ReInHerit performance">
        Performance at the Hadjigeorgakis Kornesios Mansion</MainHeading>
    <FirstPerfDocFeed></FirstPerfDocFeed>
  </BaseLayout>
  </SSRProvider>
  )
}

export default FirstPerfDocPage;