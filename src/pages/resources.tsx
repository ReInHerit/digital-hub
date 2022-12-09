import { faTools } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReinCardGrid from "../components/shared/ReinCardGrid";
import ReinGridCard from "../components/shared/ReinCardGrid/ReinGridCard";
import BaseLayout from "../components/static/BaseLayout";
import MainHeading from "../components/static/MainHeading";

const ResourcesPage = () => {

  return (
    <BaseLayout
    pageTitle="Resources | ReInHerit Digital Hub"
    >

      <MainHeading
        subHeading="Useful tools, educational material, guidelines, etc. for cultural heritage professionals."
        subText="Here you'll find an overview of all resources developed and provided by ReInHerit. Browse through the items and learn how to implement them in your institution."
        breadCrumb={[
          {label:"Resources", value:"/resources"}
        ]}
      >Resources</MainHeading>
      <ReinCardGrid>
        <ReinGridCard
          title="Tool apps"
          url="/tools/apps"
          body="Applications that are either developed within the ReInHerit project or play an important role for CH management or preservation."
        />
        <ReinGridCard
          title="Tool components"
          url="/tools/components"
          body="Necessary building blocks for the applications provided by ReInHerit."
        />
        <ReinGridCard
          title="Webinars"
          body="Training material either on the tools developed in the ReInHerit-project or generally on digitization in the CH sector, CH management and preservation. "
          url="/webinars"
        />
          <ReinGridCard
          title="Factsheets"
          body="Factsheets for Cultural Heritage Management."
          url="/factsheets"
        />
        <ReinGridCard
          title="Game"
          body="Video game developed within the ReInHerit project."
          url="/tools"
        />
        <ReinGridCard
          title="Performances"
          body="Performances developed and carried out in the course of the ReInHerit project."
          url="/tools"
        />
        <ReinGridCard
          title="Best practices"
          body="Guidelines, recommendations and manuals related to digital cultural heritage management."
          url="/tools"
        />
        </ReinCardGrid>

    </BaseLayout>
  )

}


export default ResourcesPage;