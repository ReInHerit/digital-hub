import { graphql } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
// import { useReinLocalStorage } from "../hooks/useReinLocalStorage"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"
import SideMainLayout from "../components/shared/Layout/SideMainLayout"
import ArchitectureExhibDocFeed from "../components/shared/ExhibDocFeed/Architecture"
import DigExhibExhibDocFeed from "../components/shared/ExhibDocFeed/DigExhib"
import GenInfoExhibDocFeed from "../components/shared/ExhibDocFeed/GenInfo"
import IntroOutroExhibDocFeed from "../components/shared/ExhibDocFeed/IntroOutro"
import OnCollExhibDocFeed from "../components/shared/ExhibDocFeed/OnlineColl"
import TabletExhibDocFeed from "../components/shared/ExhibDocFeed/Tablet"

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

                {frontmatter.exhibdocsection === "Architecture" && (
                    <ArchitectureExhibDocFeed></ArchitectureExhibDocFeed>
                )}

              {frontmatter.exhibdocsection === "Digital Exhibitions" && (
              <DigExhibExhibDocFeed></DigExhibExhibDocFeed> 
              )}
              {frontmatter.exhibdocsection === "Online Collection" && (
              <OnCollExhibDocFeed></OnCollExhibDocFeed>
              )}
              {frontmatter.exhibdocsection === "General Information" && (
                <GenInfoExhibDocFeed></GenInfoExhibDocFeed>
                )}
              {frontmatter.exhibdocsection === "Intro/Outro" && (
              <IntroOutroExhibDocFeed></IntroOutroExhibDocFeed>
              )}
              {frontmatter.exhibdocsection === "Tablet" && (
              <TabletExhibDocFeed></TabletExhibDocFeed>            
              )}
            
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
