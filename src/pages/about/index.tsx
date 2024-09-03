import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import AboutFeed from "../../components/shared/AboutFeed";
import MainHeading from "../../components/static/MainHeading";
import {SSRProvider} from '@react-aria/ssr'

const AboutPage: React.FC = () => {
  return (
    <SSRProvider>
    <BaseLayout
  pageTitle="About the ReInHerit Digital Hub"
  >
    <MainHeading
      subHeading="About ReInHerit and its Hub"
      subText="Discover more information about the project and the Hub."
      breadCrumb={[
        {label:"About", value:"/about"},
      ]}
    >
    Information about the H2020 Project ReInHerit and its Hub.</MainHeading>
    <AboutFeed></AboutFeed>
  </BaseLayout>
  </SSRProvider>
  )
}

export default AboutPage;