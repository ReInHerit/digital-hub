import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReinCardGrid from "../components/shared/ReinCardGrid";
import ReinGridCard from "../components/shared/ReinCardGrid/ReinGridCard";
import BaseLayout from "../components/static/BaseLayout";
import MainHeading from "../components/static/MainHeading";

const NetworkingHubPage = () => {

  return (
    <BaseLayout>
      <MainHeading>Networking Hub</MainHeading>
      <p>Coming soon...</p>
      <ReinCardGrid>
        <ReinGridCard
          excerpt="coming soon"
          faIcon={faNetworkWired}
          targetAudience={[]}
          title="Forum"
          url="https://gitter.im/ReInHerit"
          type=""
        />
        <ReinGridCard
          excerpt="coming soon"
          faIcon={faNetworkWired}
          targetAudience={[]}
          title="Chat"
          url="https://gitter.im/ReInHerit/community"
          type=""
        />
        <ReinGridCard
          excerpt="coming soon"
          faIcon={faNetworkWired}
          targetAudience={[]}
          title="Forms"
          url="/portal/exchange"
          type=""
        />
      </ReinCardGrid>
    </BaseLayout>
  )

}


export default NetworkingHubPage;