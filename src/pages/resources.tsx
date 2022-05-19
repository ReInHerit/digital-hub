import { faTools } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReinCardGrid from "../components/shared/ReinCardGrid";
import ReinGridCard from "../components/shared/ReinCardGrid/ReinGridCard";
import BaseLayout from "../components/static/BaseLayout";
import MainHeading from "../components/static/MainHeading";

const ResourcesPage = () => {

  return (
    <BaseLayout>

      <MainHeading>Resources</MainHeading>

      <ReinCardGrid>
        <ReinGridCard
          title="Tools"
          excerpt="coming soon..."
          targetAudience={[]}
          url="/tools"
          faIcon={faTools}
          type=""
        />
        <ReinGridCard
          title="Webinars"
          excerpt="coming soon..."
          targetAudience={[]}
          url="/tools"
          faIcon={faTools}
          type=""
        />
        <ReinGridCard
          title="Game"
          excerpt="coming soon..."
          targetAudience={[]}
          url="/tools"
          faIcon={faTools}
          type=""
        />
        <ReinGridCard
          title="Performances"
          excerpt="coming soon..."
          targetAudience={[]}
          url="/tools"
          faIcon={faTools}
          type=""
        />
        <ReinGridCard
          title="Best Practices"
          excerpt="coming soon..."
          targetAudience={[]}
          url="/tools"
          faIcon={faTools}
          type=""
        />
        </ReinCardGrid>

    </BaseLayout>
  )

}


export default ResourcesPage;