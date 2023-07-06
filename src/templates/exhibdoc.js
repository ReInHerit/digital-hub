import { graphql } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
// import { useReinLocalStorage } from "../hooks/useReinLocalStorage"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"
import SideMainLayout from "../components/shared/Layout/SideMainLayout"
import ArchitectureExhibDocFeed from "../../components/shared/ExhibDocFeed/architecture";
import DigExhibExhibDocFeed from "../../components/shared/ExhibDocFeed/digexhib";
import GenInfoExhibDocFeed from "../../components/shared/ExhibDocFeed/geninfo";
import IntroOutroExhibDocFeed from "../../components/shared/ExhibDocFeed/introoutro";
import OnCollExhibDocFeed from "../../components/shared/ExhibDocFeed/onlinecoll";
import TabletExhibDocFeed from "../../components/shared/ExhibDocFeed/tablet";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
 
  return (
    <BaseLayout>
      <MainHeading
      breadCrumb={[
          {label:"Exhibitions Documentation", value:"/exhibdoc"},
          {label:"...", value:"/exhibdoc"},
        ]}
      >
        {frontmatter.title}
      </MainHeading>
      <div className="blog-post-container" id="markdown_container">
        <div className="blog-post">
        <SideMainLayout
            side={
              <div className="card p-4 border-0 shadow bg-white">
        <ArchitectureExhibDocFeed></ArchitectureExhibDocFeed>
        <DigExhibExhibDocFeed></DigExhibExhibDocFeed>
        <GenInfoExhibDocFeed></GenInfoExhibDocFeed>
        <IntroOutroExhibDocFeed></IntroOutroExhibDocFeed>
        <OnCollExhibDocFeed></OnCollExhibDocFeed>
        <TabletExhibDocFeed></TabletExhibDocFeed>
              </div>
            }
            >  
        <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
        </Container>
        </SideMainLayout>
        </div>
      </div>
    </BaseLayout>
  )
}

export const pageQuery = graphql`
query($id: String!) {
  markdownRemark(frontmatter: { pageId: { eq: $id } }) {
  html
  frontmatter {
      date
      title
      license
      target_audience
      tags
      theme
      thumbnail
      type
      mainImage
      exhibdocsection
    }
  id
  excerpt
  }
}
`
