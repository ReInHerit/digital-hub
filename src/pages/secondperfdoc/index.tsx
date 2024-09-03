import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import SecondPerfDocFeed from "../../components/shared/SecondPerfDocFeed";
import MainHeading from "../../components/static/MainHeading";
import {SSRProvider} from '@react-aria/ssr'

const SecondPerfDocPage: React.FC = () => {
  return (
    <SSRProvider>
    <BaseLayout
        pageTitle="Performance at the Bank of Cyprus Cultural Foundation || Documentation"
        breadCrumb={[
            {label:"Resources", value:"/resources"}, {label:"Second Performance Documentation", value:"/secondperfdoc"},
          ]}
    >
        <MainHeading subHeading="ReInHerit a Museum - Documentation">
        “ReInHerit a Museum: Immersive Performance at the BoCCF”</MainHeading>
      <SecondPerfDocFeed></SecondPerfDocFeed>
  </BaseLayout>
  </SSRProvider>
  )
}

export default SecondPerfDocPage;