import { graphql, Link } from "gatsby"
import React from "react"
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
            subHeading={<>This resource is part of the <Link className="text-primary text-decoration-none text-dark" to={`/exhibitions`}>exhibitions</Link> section.</>}
            subText={markdownRemark.excerpt}
          >{frontmatter.title}</MainHeading>
          <div id="markdown_container">
            <div className="bg-light p-3 rounded border shadow">
              <img src={frontmatter.image}></img>
              <div
                  className="blog-post-content text-primary"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: {pageId : {eq:$id}}) {
      html
      frontmatter {
        date
        title
        thumbnail
        type
        date
        image
      }
      id
      excerpt
    }
  }

`
