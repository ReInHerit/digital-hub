import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import HackathonNicosiaFeed from "../../components/shared/HackathonNicosiaFeed";
import MainHeading from "../../components/static/MainHeading";
import {SSRProvider} from '@react-aria/ssr'

const HackathonNicosiaPage: React.FC = () => {
  return (
    <SSRProvider>
    <BaseLayout
  pageTitle="ReInHerit Smart Tourism Hackathon | ReInHerit Digital Hub"
  >
    <MainHeading
      subHeading="Showcase of the ReInHerit Smart Tourism Hackathon, Nicosia, January 2024."
      breadCrumb={[
        {label:"Events", value:"/events"},
        {label:"Hackathon @Nicosia", value:"/reinherithackathon"}
      ]}
    >ReInHerit Smart Tourism Hackathon (Nicosia, January 2024)</MainHeading>
    <HackathonNicosiaFeed></HackathonNicosiaFeed>
  </BaseLayout>
  </SSRProvider>
  )
}

export default HackathonNicosiaPage;