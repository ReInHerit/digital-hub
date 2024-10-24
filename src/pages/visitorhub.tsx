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
    <BaseLayout
    pageTitle="Hub content | ReInHerit Digital Hub"
    >
      <MainHeading 
        subHeading="Visit the ReInHerit digital exhibitions, the online collection, and the eShop; experiment with the ReInHerit applications; and listen to the Museums Up podcast."
        // subText="Here you'll find  digital exhibitions, videos and images from the project immersive performances, and apps that let you play and interact with cultural heritage in innovative ways."
        breadCrumb={[
          {label:"Discover", value:"/visitorhub"}
        ]}
      >Engage with Cultural Heritage and explore ReInHerit tools</MainHeading>
      <ReinCardGrid>
        <ReinGridCard
          body="Free artistic designs created during the ReInHerit project. All are free to download and available for the public."
          title="eShop"
          url="/eshop"
        />
         <ReinGridCard
          body="Introducing a variety of museum themes through our podcast."
          title="Museums Up Podcast"
          url="/podcasts"
        />
        <ReinGridCard
          body="Visit the ReInHerit digital exhibitions!"
          title="Digital exhibition"
          url="/exhibitions"
        />
         <ReinGridCard
          body="Visit the ReInHerit digital collections, bringing together European heritage."
          title="Digital collection"
          url="https://collection.reinherit-hub.eu/"
        />
        <ReinGridCard
          body="Discover the ReInHerit applications, using Computer Vision technology to foster engagement in museums."
          title="Toolkit Applications"
          url="/applications"
        />
        <ReinGridCard
          body="Play the ReInHerit videogame and become a museum manager or curator."
          title="Videogame"
          url="/game"
        />
         <ReinGridCard
          body="Discover the ReInHerit events."
          title="Events"
          url="/events"
        />
        <ReinGridCard
          body="Discover the second ReInHerit immersive performance, taking place at BoCCF on the 19.05.2023."
          title="Performance at BoCCF"
          url="/secondperfpublic/0Introduction"
        />
        <ReinGridCard
          body="Travelling exhibitions in the ReInHerit museums: visit us in Cyprus, Greece, and Austria!"
          title="Travelling exhibitions"
          url="/travellingexhibitions"
        />
        <ReinGridCard
          body="Hackathon organized by ReInHerit."
          title="Hackathon"
          url="https://reinherithackathon.cyens.org.cy/homepage/"
        />        
      </ReinCardGrid>
    </BaseLayout>
  )
}

export default VisitorHubPage