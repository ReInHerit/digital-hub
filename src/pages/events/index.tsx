import React from "react";
import ReinCardGrid from "../../components/shared/ReinCardGrid";
import ReinGridCard from "../../components/shared/ReinCardGrid/ReinGridCard";
import BaseLayout from "../../components/static/BaseLayout";
import MainHeading from "../../components/static/MainHeading";

const EventsPage: React.FC = () => {
  return <BaseLayout
  pageTitle="Events | ReInHerit Digital Hub"
  >
    <MainHeading
      subHeading="Our events"
      subText="During the project, different events were organised. This page presents an overview of the main ones and is regularly updated."
      breadCrumb={[
        {label:"Events", value:"/events"}
      ]}
    >Events overview</MainHeading>
    <ReinCardGrid>
    <ReinGridCard
        title="Immersive Performance I"
        url="/news/fa8d3e7f-4109-4804-b772-9e101d41ecfe/"
        body="Information on the first immersive performance (October 2022)."
      />
      <ReinGridCard
        title="Immersive Performance II"
        url="/secondperfpublic/0Introduction/"
        body="Information on the second immersive performance (May 2023)."
      />
      <ReinGridCard
        title="Travelling exhibitions"
        url="/travellingexhibitions/"
        body="The RETHINKING Travelling exhibitions, hosted in Cyprus, Greece, and Austria."
      />
      <ReinGridCard
        title="Hackathon in Matera"
        url="/summerschool/"
        body="ReInHerit Hackathon in Matera."
      />
      <ReinGridCard
        title="Hackathon in Nicosia"
        url="https://reinherithackathon.cyens.org.cy/homepage/"
        body="ReInHerit Hackathon in Nicosia."
      />
    </ReinCardGrid>
  </BaseLayout>;
}

export default EventsPage;