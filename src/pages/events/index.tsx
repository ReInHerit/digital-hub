import React from "react";
import ReinCardGrid from "../../components/shared/ReinCardGrid";
import ReinGridCard from "../../components/shared/ReinCardGrid/ReinGridCard";
import BaseLayout from "../../components/static/BaseLayout";
import MainHeading from "../../components/static/MainHeading";

const EventsPage: React.FC = () => {
  return <BaseLayout>
    <MainHeading
      subHeading="Cultural heritage events organised by ReInHerit"
    >Events overview</MainHeading>
    <p>Here you'll find an overview of all cultural heritage related events provided via ReInHerit, like artistic performances.</p>
    <ReinCardGrid>
      <ReinGridCard
        title="Performances"
        url="/performances"
        body="Performances developed and carried out in the course of the ReInHerit project."
      />
      <ReinGridCard
        title="Traveling exhibitions"
        url="/exhibs/travel"
        body="On site exhibitions and related material provided by ReInHerit."
      />
      <ReinGridCard
        title="Hackathon"
        url="/hackathon"
        body="Hackathon organized by ReInHerit"
      />
        
    </ReinCardGrid>
  </BaseLayout>;
}

export default EventsPage;