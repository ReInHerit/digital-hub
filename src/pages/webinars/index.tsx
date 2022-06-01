import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import WebinarFeed from "../../components/shared/WebinarFeed";
import MainHeading from "../../components/static/MainHeading";

const WebinarsPage = () => {

  return <BaseLayout
  >
    <MainHeading
      subHeading="Webinars provided by the digital hub"
    >Webinars</MainHeading>
    <WebinarFeed></WebinarFeed>
  </BaseLayout>

}


export default WebinarsPage;