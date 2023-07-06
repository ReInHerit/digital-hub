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
          body= "Overview of the process for setting up the travelling exhibitions."
          title="General Information"
          url="/exhibitionsdoc/docgeninfo/"
        />
                <ReinGridCard
          body="Description of the architecture of the travelling exhibitions and its components."
          title="Architecture"
          url="/exhibitionsdoc/docarchitecture/"
        />
        <ReinGridCard
          body="Documentation of the Tablet application."
          title="Tablet Application"
          url="/exhibitionsdoc/doctablet/"
        />
</ReinCardGrid>

</div>

  </BaseLayout>
  )
}

export default ExhibDocPage