import { faTools } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReinCardGrid from "../components/shared/ReinCardGrid";
import ReinGridCard from "../components/shared/ReinCardGrid/ReinGridCard";
import BaseLayout from "../components/static/BaseLayout";
import MainHeading from "../components/static/MainHeading";

const ResourcesPage = () => {

  return (
    <BaseLayout>

      <MainHeading
        subHeading="Resources available on the Digital Hub"
      >Resources</MainHeading>

      <ReinCardGrid>
        <ReinGridCard
          title="Tool apps"
          url="/tools/apps"
          body="coming soon..."
        />
        <ReinGridCard
          title="Tool components"
          url="/tools/components"
          body="coming soon..."
        />
        <ReinGridCard
          title="Webinars"
          body="coming soon..."
          url="/webinars"
        />
        <ReinGridCard
          title="Game"
          body="coming soon..."
          url="/tools"
        />
        <ReinGridCard
          title="Performances"
          body="coming soon..."
          url="/tools"
        />
        <ReinGridCard
          title="Best Practices"
          body="coming soon..."
          url="/tools"
        />
        </ReinCardGrid>

    </BaseLayout>
  )

}


export default ResourcesPage;