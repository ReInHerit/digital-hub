import { graphql, Link } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
import SideMainLayout from "../components/shared/Layout/SideMainLayout"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext, // pagecontext provided by gatsby
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <BaseLayout>
      <div className="blog-post-container">
        <div className="blog-post">
          <MainHeading
            subHeading={
              <>
                This resource is part of the{" "}
                <Link
                  style={{ textDecoration: "none", color: "#2eacc8" }}
                  to={`/doc/${frontmatter.type}`}
                >
                  {frontmatter.type}
                </Link>{" "}
                section.
              </>
            }
          >
            Documentation
          </MainHeading>
          <br />
          <h2 className="h5">{frontmatter.title}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
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
        type
        question
        answer
      }
      id
      excerpt
    }
  }
`
