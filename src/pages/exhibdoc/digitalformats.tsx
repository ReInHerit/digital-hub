import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import MainHeading from "../../components/static/MainHeading";
import ReinCardGrid from "../../components/shared/ReinCardGrid";
import ReinGridCard from "../../components/shared/ReinCardGrid/ReinGridCard";

const ExhibDocPage: React.FC = () => {
  return (
    <BaseLayout
  pageTitle="Exhibitions: Documentation"
  >
    <MainHeading
      subHeading="Technical documentation of the development, design, and features of the ReInHerit exhibitions."
      breadCrumb={[
        {label:"Resources", value:"/resources"},
        {label:"Exhibitions documentation", value:"/exhibdoc"}
      ]}
    >Documentation of the ReInHerit Exhibitions.</MainHeading>

<div className="blog-post-container" id="markdown_container">

<ReinCardGrid>
        <ReinGridCard
          body= "Documentation of the digital exhibitions"
          title="Digital Exhibitions"
          url="/exhibdoc/docdigexhib/"
        />
                <ReinGridCard
          body="Documentation of the quiz connecting the online/offline experiences."
          title="Quiz"
          url="/exhibdoc/docintros/"
        />
        <ReinGridCard
          body="Documentation of the ReInHerit online collection."
          title="Online Collection"
          url="/exhibdoc/doconlinecoll/"
        />
</ReinCardGrid>

</div>

  </BaseLayout>
  )
}

export default ExhibDocPage