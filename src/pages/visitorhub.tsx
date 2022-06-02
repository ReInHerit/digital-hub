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
      <MainHeading subHeading="coming soon...">Visitors overview</MainHeading>
      <ReinCardGrid>
        <ReinGridCard
          body="coming soon"
          title="eShop"
          url="/designs"
        />
        <ReinGridCard
          body="coming soon"
          title="Digital exhibition"
          url="/exhibs/digital"
        />
        <ReinGridCard
          body="coming soon"
          title="Performances"
          url="/portal/performances"
        />
        <ReinGridCard
          body="coming soon"
          title="Travelling exhibitions"
          url="/exhibs/travel"
        />
        <ReinGridCard
          body="coming soon"
          title="Hackathon"
          url="/"
        />
        
      </ReinCardGrid>
    </BaseLayout>
  )
}

export default VisitorHubPage
