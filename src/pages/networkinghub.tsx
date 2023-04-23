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
          body= "The ReInHerit Forum is currently under redevelopment. Please come back soon for joining our conversations!"
          //"Join the ReInHerit Forum. You can freely login with GitHub, join different thematic rooms, and participate in all the conversations."
          title="Forum"
        />
                <ReinGridCard
          body="View the past conversations in the ReInHerit Forum."
          title="Forum Archive"
          url="/forumarchive/"
        />
        <ReinGridCard
          body="Contribute to the ReInHerit digital exhibitions with your collections! Participatory action open to all European museums."
          title="Call for exhibition objects"
          url="/museumcalls/digital"
      />
        <ReinGridCard
          body="Host a ReInHerit travelling exhibition. Call open to all museums."
          title="Host an exhibition"
          url="/museumcalls/travelling"
      />
       </ReinCardGrid>
    </BaseLayout>
  )
}


export default NetworkingHubPage;