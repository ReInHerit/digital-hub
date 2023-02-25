import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import ApplicationPromoFeed from "../../components/shared/ApplicationsPromo";
import MainHeading from "../../components/static/MainHeading";

const ApplicationPromoPage: React.FC = () => {
  return (
    <BaseLayout
  pageTitle="Computer Vision Application for museums | ReInHerit Digital Hub"
  >
    <MainHeading
      subHeading="Computer vision applications for cultural heritage."
      subText="The technical documentation of these applications will be published under resources."
      breadCrumb={[
        {label:"Content", value:"/content"},
        {label:"ReInHerit Applications", value:"/applications"}
      ]}
    >Discover and test the ReInHerit applications</MainHeading>
    <ApplicationPromoFeed></ApplicationPromoFeed>
  </BaseLayout>
  )
}

export default ApplicationPromoPage