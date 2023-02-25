import { graphql } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
// import { useReinLocalStorage } from "../hooks/useReinLocalStorage"
import SideMainLayout from "../components/shared/Layout/SideMainLayout"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
 
  return (
    <BaseLayout>
      <MainHeading
      subHeading={
        frontmatter.type.charAt(0).toUpperCase() +
        frontmatter.type.slice(1, frontmatter.type.length)
      }
      subText={frontmatter.abstract ? frontmatter.abstract : markdownRemark.excerpt}
      breadCrumb={[
          {label:"Best Practices", value:"/bestpractices"},
          {label:"...", value:"/bestpractices"},
        ]}
      >
        {frontmatter.title}
      </MainHeading>
      <div className="blog-post-container" id="markdown_container">
        <div className="blog-post">
          <SideMainLayout
            side={
              <div className="bg-white card p-4 mb-2 border-0 shadow">
                <div>
                  <i>Author(s)</i>
                </div>
                <div>ReInHerit Project</div>
                <br />
                <div>
                  <i>Publication date</i>
                </div>
                <div>{frontmatter.date}</div>
                <br />
                <div>
                  <i>Terms of reuse</i>
                </div>
                <div>MIT - CC BY 4.0</div>
                <br />
                <div>
                </div>
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
    }
  id
  excerpt
  }
}
`
