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
            subHeading={<>This resource is part of the <Link style={{textDecoration:"none", color:"#2eacc8"}} to={`/exhibitions`}>exhibitions</Link> section.</>}
          >{frontmatter.title}</MainHeading>
          <p className="w-75"><i>Excerpt: </i>{markdownRemark.excerpt}</p>
          <div>
            <div className="mb-2"><span className="bg-primary p-1 ps-3 pe-3 text-white rounded">{frontmatter.title}</span></div>
            <div className="bg-light p-3 rounded border">
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
