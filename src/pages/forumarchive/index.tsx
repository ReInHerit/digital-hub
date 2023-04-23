import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import MainHeading from "../../components/static/MainHeading";
import { Container } from "react-bootstrap"

const ForumArchive: React.FC = () => {
  return (
    <BaseLayout
    pageTitle="Forum Archive | ReInHerit Digital Hub"
    >
      <MainHeading
        subHeading="An archive of the ReInHerit community public conversations on the ReInHerit past forum."
        breadCrumb={[
          {label:"Forum Archive", value:"/networking"},
        ]}
      >ReInHerit Forum Archive</MainHeading>
    <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
    <div>
    <p>Find here an archive of our previous public conversations:</p>
    <ul>
      <li><a href="https://app.gitter.im/#/room/#ReInHerit_ReInHerit-Chat:gitter.im">ReInHerit Chats</a></li>
      <li><a href="https://app.gitter.im/#/room/#ReInHerit_community:gitter.im">Former ReInHerit community room</a></li>
      <li><a href="https://app.gitter.im/#/room/#ReInHerit_Immersive-performances:gitter.im">Chat surrounding the first immersive performance (October 2022)</a></li>
      <li><a href="https://app.gitter.im/#/room/#ReInHerit_Cultural-tourism:gitter.im">Past conversations on cultural tourism</a></li>
    </ul>
    </div>
    </Container>
    </BaseLayout>
  )
}

export default ForumArchive
