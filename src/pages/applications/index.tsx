import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import ApplicationPromoFeed from "../../components/shared/ApplicationsPromo";
import MainHeading from "../../components/static/MainHeading";
import {SSRProvider} from '@react-aria/ssr'

const ApplicationPromoPage: React.FC = () => {
  return (
    <SSRProvider>
    <BaseLayout
  pageTitle="Computer Vision Application for museums | ReInHerit Digital Hub"
  >
    <MainHeading
      subHeading="Computer vision applications for cultural heritage."
      subText="The technical documentation of these applications is available under resources."
      breadCrumb={[
        {label:"Discover", value:"/visitorhub"},
        {label:"ReInHerit Applications", value:"/applications"}
      ]}
    >Discover and test the ReInHerit applications</MainHeading>
    <ApplicationPromoFeed></ApplicationPromoFeed>
  </BaseLayout>
  </SSRProvider>
  )
}

export default ApplicationPromoPage;