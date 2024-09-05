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
          title="Best practices"
          body="Compilation of best practices for Cultural Heritage Management."
          url="/bestpractices"
        />
        <ReinGridCard
          title="Handbook"
          body="The ReInHerit Handbook for Cultural Heritage Management."
          url="/handbook"
        />
        <ReinGridCard
          title="Scientific Publications"
          body="Academic publications from the ReInHerit project."
          url="/about/3b438d0d-239e-4027-a5c3-917263e373aa"
        />
        <ReinGridCard
          title="Hackathon Training Material"
          body="Webinars and documentation from the ReInHerit Cultural Tourism Hackathon."
          url="/hackathonnicosia"
        />
        <ReinGridCard
          title="Toolkit Apps Documentation"
          body="ReInHerit Toolkit Applications documentation."
          url="/tools/apps"
        />
        <ReinGridCard
          title="Toolkit components"
          url="/tools/components"
          body="Learn more about the building blocks of the applications in the ReInHerit Toolkit."
        />
        <ReinGridCard
          title="eShop Documentation"
          body="ReInHerit eShop documentation."
          url="/eshopdoc/7ad7993f-c1c6-42dc-a183-192aae852ccd"
        />
        <ReinGridCard
          title="First Immersive Performance"
          body="Immersive Performance held in October 2022."
          url="/firstperfdoc/"
        />
        <ReinGridCard
          title="Second Immersive Performance"
          body="Immersive Performance held in May 2023."
          url="/secondperfdoc/"
        />
        <ReinGridCard
          title="Exhibitions"
          body="Digital and travelling exhibitions, including applications and design guidelines."
          url="/exhibdoc/"
        />
        <ReinGridCard
          title="Online collection"
          body="The ReInHerit digital collection: learn more and contribute."
          url="/exhibdoc/doconlinecoll/"
        />
        <ReinGridCard
          title="Videogame Documentation"
          body="Video game developed within the ReInHerit project."
          url="/gamedoc/5761ffde-e42d-4697-973a-353c16f32590"
        />
        <ReinGridCard
          title="Best Practices"
          body="Guidelines, recommendations and manuals related to digital cultural heritage management."
          url="/bestpractices"
        />
      
        </ReinCardGrid>

    </BaseLayout>
  )

}

export default ResourcesPage;