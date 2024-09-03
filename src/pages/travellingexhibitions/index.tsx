import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import TravellingExhibFeed from "../../components/shared/TravellingExhibitionsFeed";
import MainHeading from "../../components/static/MainHeading";
import {SSRProvider} from '@react-aria/ssr'

const travellingExhib = () => {
    return (
      <SSRProvider>
      <BaseLayout
      pageTitle="Travelling Exhibitions | ReInHerit Digital Hub"
      >
        <MainHeading subHeading="ReThinking Exhibitions, in Greece, Cyprus, and Austria"
          breadCrumb={[
            {label:"Discover", value:"/visitorhub"},
            {label:"Travelling Exhibitions", value:"/travellingexhibitions"}
          ]}        
        >Discover the ReThinking Exhibitions</MainHeading>
    <TravellingExhibFeed></TravellingExhibFeed>
  </BaseLayout>
  </SSRProvider>
  )
}

export default travellingExhib;