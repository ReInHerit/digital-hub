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
          body= "Documentation about the digital exhibitions, the online collection, and the quiz application bridging online/offline experiences."
          title="Digital Formats"
          url="/exhibitionsdoc/digitalformats/"
        />
                <ReinGridCard
          body="Documentation of the travelling exhibitions, detailing the architecture and the tablet application."
          title="Travelling Exhibitions"
          url="/exhibitionsdoc/travellingdoc/"
        />
</ReinCardGrid>

</div>

  </BaseLayout>
  )
}

export default ExhibDocPage