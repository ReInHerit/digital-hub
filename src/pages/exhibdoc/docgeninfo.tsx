import React from "react";
import BaseLayout from "../../components/static/BaseLayout";
import GenInfoExhibDocFeed from "../../components/shared/ExhibDocFeed/GenInfo";
import MainHeading from "../../components/static/MainHeading";
import { Container } from "react-bootstrap"
import SideMainLayout from "../../components/shared/Layout/SideMainLayout"

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
  <div className="blog-post">
  <SideMainLayout
      side={
        <div className="card p-4 border-0 shadow bg-white">
        <GenInfoExhibDocFeed></GenInfoExhibDocFeed>
        </div>
      }
      >  
  <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
        <div>This section documents the design and development process of the ReInHerit exhibitions, as well as the technologies used. Discover more by exploring the items on the left!</div>
  </Container>
  </SideMainLayout>
  </div>
</div>

  </BaseLayout>
  )
}

export default ExhibDocPage