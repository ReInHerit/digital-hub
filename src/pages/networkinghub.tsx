import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReinCardGrid from "../components/shared/ReinCardGrid";
import ReinGridCard from "../components/shared/ReinCardGrid/ReinGridCard";
import BaseLayout from "../components/static/BaseLayout";
import MainHeading from "../components/static/MainHeading";

const NetworkingHubPage = () => {

  return (
    <BaseLayout>
      <MainHeading
        subHeading="Collaboration and communication tools provided by the digital hub"
      >Networking</MainHeading>
      <p>Here you'll find different means to communicate and collaborate with other cultural heritage professionals.</p>
      <ReinCardGrid>
        <ReinGridCard
          body="coming soon"
          title="Forum"
          url="https://gitter.im/ReInHerit"
        />
        <ReinGridCard
          body="coming soon"
          title="Chat"
          url="https://gitter.im/ReInHerit/community"
        />
        <ReinGridCard
          body="coming soon"
          title="Forms"
          url="/portal/exchange"
        />
      </ReinCardGrid>
    </BaseLayout>
  )

}


export default NetworkingHubPage;