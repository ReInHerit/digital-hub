import { graphql } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
// import { useReinLocalStorage } from "../hooks/useReinLocalStorage"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"
import SideMainLayout from "../components/shared/Layout/SideMainLayout"
import GameDocFeed from "../components/shared/GameDocFeed"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
 
  return (
    <BaseLayout>
      <MainHeading
      breadCrumb={[
          {label:"Videogame Documentation", value:"/gamedoc"},
          {label:"...", value:"/gamedoc"},
        ]}
      >
        {frontmatter.title}
      </MainHeading>
      <div className="blog-post-container" id="markdown_container">
        <div className="blog-post">
        <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              {frontmatter.mainImage &&
                  frontmatter.mainImage.length !== 0 && (
              <a style={{borderRadius:0}} href={frontmatter.mainImage} download="mainImage" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click this button to download the GDD.</a>
                  )}
        </Container>
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
    }
  id
  excerpt
  }
}
`
