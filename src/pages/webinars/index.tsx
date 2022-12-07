import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import WebinarFeed from "../../components/shared/WebinarFeed";
import MainHeading from "../../components/static/MainHeading";

const WebinarsPage = () => {

  return <BaseLayout
  pageTitle="Webinars | ReInHerit Digital Hub"
  >
    <MainHeading
      subHeading="Webinars related to cultural heritage management provided by ReInHerit"
      subText="ReinHerit Webinars are aimed at cultural heritage professionals. They will consist of a *how to guide* for small and medium-sized museum and cultural heritage organizations that documents processes, provides instruction, technical requirements and best practices for co-creation and collaboration between museums and cultural heritage institutions. On this page, you can find resources from past webinars (video recordings and slides). Visit the News section to discover upcoming webinars!"
      breadCrumb={[
        {label:"Resources", value:"/resources"},
        {label:"Webinars", value:"/webinars"}
      ]}
    >Webinars</MainHeading>
    <WebinarFeed></WebinarFeed>
  </BaseLayout>

}


export default WebinarsPage;