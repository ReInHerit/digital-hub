import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import DocFeed from "../../components/shared/DocFeed";
import MainHeading from "../../components/static/MainHeading";
import {SSRProvider} from '@react-aria/ssr'

const DocPage: React.FC = () => {
  return (
    <SSRProvider>
   <BaseLayout
    pageTitle="Documentation | ReInHerit Digital Hub"
    >
      <MainHeading subHeading="Documentation and Use of the ReInHerit Digital Hub"
        breadCrumb={[{label:"Documentation", value:"/doc"},
        ]}
      >Documentation</MainHeading>
    <DocFeed></DocFeed>
  </BaseLayout>
  </SSRProvider>
  )
}

export default DocPage;