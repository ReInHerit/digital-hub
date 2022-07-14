import React from "react"
import ReinCardGrid from "../components/shared/ReinCardGrid"
import ReinGridCard from "../components/shared/ReinCardGrid/ReinGridCard"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"

/** 
 * Provides navigational overview for visitors target group
*/
const VisitorHubPage = () => {
  return (
    <BaseLayout>
      <MainHeading 
        subHeading="Structured overview of all material on the digital-hub"
        subText="Here you'll find  digital exhibitions, videos and images from the project immersive performances, and apps that let you play and interact with cultural heritage in innovative ways."
        breadCrumb={[
          {label:"Content overview", value:"/visitorhub"}
        ]}
      >Hub content</MainHeading>
      <ReinCardGrid>
        <ReinGridCard
          body="Free artistic designs created during the ReInHerit project. All are free to download and available for the public."
          title="eShop"
          url="/eshop"
        />
        <ReinGridCard
          body="Digital-first exhibitions and related material provided by ReInHerit."
          title="Digital exhibition"
          url="/exhibitions"
        />
        <ReinGridCard
          body="Performances developed and carried out in the course of the ReInHerit project."
          title="Performances"
          url="/performances"
        />
        <ReinGridCard
          body="On site exhibitions and related material provided by ReInHerit."
          title="Travelling exhibitions"
          url="/exhibs/travel"
        />
        <ReinGridCard
          body="Hackathon organized by ReInHerit."
          title="Hackathon"
          url="/hackathon"
        />
        
      </ReinCardGrid>
    </BaseLayout>
  )
}

export default VisitorHubPage
