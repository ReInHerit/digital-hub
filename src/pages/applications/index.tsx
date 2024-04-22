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
    >Discover and test the ReInHerit applications. Find technical information and documentation in the Resources section.</MainHeading>
    <p></p><a style={{borderRadius:3}} href="/pdfs/ReInHerit_Toolkit.pdf" download="toolkitSummary" className="btn btn-info border-radius-2" target="_blank" rel="noreferrer">Click this button to download an overview of the Toolkit and all the material available about it (documentation, webinars, further info).</a>
    <p></p>
    <ApplicationPromoFeed></ApplicationPromoFeed>
  </BaseLayout>
  </SSRProvider>
  )
}

export default ApplicationPromoPage;