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
        subHeading="Tools, training material, and factsheets for cultural heritage professionals."
        subText="Browse through the ReInHerit resources and adopt them."
        breadCrumb={[
          {label:"Resources", value:"/resources"}
        ]}
      >Resources</MainHeading>
      <ReinCardGrid>
      {/*
        <ReinGridCard
          title="Tool components"
          url="/tools/components"
          body="Learn more about the building blocks of the applications provided by ReInHerit."
        />
      */}
        <ReinGridCard
          title="Webinars"
          body="Webinars on digital tools and methods, cultural heritage management, and cultural tourism."
          url="/webinars"
        />
          <ReinGridCard
          title="Factsheets"
          body="Factsheets for Cultural Heritage Management."
          url="/factsheets"
        />
        <ReinGridCard
          title="Applications"
          body="ReInHerit Toolkit Applications"
          url="/tools/apps"
        />
        <ReinGridCard
          title="eShop Documentation"
          body="ReInHerit eShop documentation"
          url="/eshopdoc"
        />
      {/*
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
    */}
      
        </ReinCardGrid>

    </BaseLayout>
  )

}


export default ResourcesPage;