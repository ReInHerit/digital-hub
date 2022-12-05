import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReinCardGrid from "../components/shared/ReinCardGrid";
import ReinGridCard from "../components/shared/ReinCardGrid/ReinGridCard";
import BaseLayout from "../components/static/BaseLayout";
import MainHeading from "../components/static/MainHeading";

const NetworkingHubPage = () => {

  return (
    <BaseLayout
      pageTitle="Networking | ReInHerit Digital Hub"
    >
      <MainHeading
        subHeading="Collaboration and communication around the ReInHerit project and its themes."
        subText="The ReInHerit forum is open to everyone: you are welcome to join in the conversations, 
        share your experiences, or ask questions about the ReInHerit work! Temporary call for actions and participation will also be shared in this area."
        breadCrumb={[{
          label:"Networking", value:"/networkinghub"
        }]}
      >Networking</MainHeading>
      <ReinCardGrid>
        <ReinGridCard
          body="Join the ReInHerit Forum. You can freely login with GitHub or Twitter, join different thematic rooms, 
          and participate in all the conversations."
          title="Forum"
          url="https://gitter.im/ReInHerit"
        />
   {/*
        <ReinGridCard
          body="Contribute to the ReInHerit digital exhibitions with your collections! Participatory action open to all European museums."
          title="Call for exhibition objects"
          url="..."
      /> */}
       </ReinCardGrid>
    </BaseLayout>
  )
}


export default NetworkingHubPage;