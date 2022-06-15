import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import WebinarFeed from "../../components/shared/WebinarFeed";
import MainHeading from "../../components/static/MainHeading";

const WebinarsPage = () => {

  return <BaseLayout
  >
    <MainHeading
      subHeading="Webinars related to cultural heritage management provided by ReInHerit"
    >Webinars</MainHeading>
    <p>Here you will find training material either on the tools developed in the ReInHerit-project or generally on digitization in the CH sector, CH management and preservation.</p>
    <WebinarFeed></WebinarFeed>
  </BaseLayout>

}


export default WebinarsPage;