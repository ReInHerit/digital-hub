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
      subText="Here you will find training material either on the tools developed in the ReInHerit-project or generally on digitization in the CH sector, CH management and preservation."
      breadCrumb={[
        {label:"Resources", value:"/resources"},
        {label:"Webinars", value:"/webinars"}
      ]}
    >Webinars</MainHeading>
    <WebinarFeed></WebinarFeed>
  </BaseLayout>

}


export default WebinarsPage;