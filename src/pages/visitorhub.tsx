import { faNetworkWired } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import ReinCardGrid from "../components/shared/ReinCardGrid"
import ReinGridCard from "../components/shared/ReinCardGrid/ReinGridCard"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"

const VisitorHubPage = () => {
  return (
    <BaseLayout>
      <MainHeading subHeading="coming soon...">Visitors overview</MainHeading>
      <ReinCardGrid>
        <ReinGridCard
          excerpt="coming soon"
          faIcon={faNetworkWired}
          targetAudience={[]}
          title="eShop"
          url="/designs"
          type=""
        />
        <ReinGridCard
          excerpt="coming soon"
          faIcon={faNetworkWired}
          targetAudience={[]}
          title="Digital exhibition"
          url="/exhibs/digital"
          type=""
        />
        <ReinGridCard
          excerpt="coming soon"
          faIcon={faNetworkWired}
          targetAudience={[]}
          title="Performances"
          url="/portal/performances"
          type=""
        />
        <ReinGridCard
          excerpt="coming soon"
          faIcon={faNetworkWired}
          targetAudience={[]}
          title="Travelling exhibitions"
          url="/exhibs/travel"
          type=""
        />
        <ReinGridCard
          excerpt="coming soon"
          faIcon={faNetworkWired}
          targetAudience={[]}
          title="Hackathon"
          url="/"
          type=""
        />
        
      </ReinCardGrid>
    </BaseLayout>
  )
}

export default VisitorHubPage
