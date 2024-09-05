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
          body= "Join the ReInHerit Forum. You can freely login with GitHub or a Google Account, join different thematic rooms, and participate in all the conversations."
          title="Forum"
          url="/forum/"

        />
                <ReinGridCard
          body="View the past conversations in the ReInHerit Forum."
          title="Forum Archive"
          url="/forumarchive/"
        />
        <ReinGridCard
          body="Contribute to the ReInHerit digital exhibitions with your collections! Participatory action open to all European museums."
          title="Call for exhibition objects"
          url="/museumcalls/96ee4e71-7184-4557-ac18-ca825fe33b05"
      />
        <ReinGridCard
          body="Host a ReInHerit travelling exhibition. Call open to all museums."
          title="Host an exhibition"
          url="/museumcalls/ecef209d-8276-4aff-90d7-4228f5238731"
      />
       <ReinGridCard
          body="Discover our events and participate."
          title="Events"
          url="/events"
      />
       </ReinCardGrid>
    </BaseLayout>
  )
}


export default NetworkingHubPage;