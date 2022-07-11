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
            subHeading={<>This resource is part of the <Link className="text-primary text-decoration-none" to={`/${frontmatter.type}`}>{frontmatter.type}</Link> section.</>}
          >{frontmatter.title}</MainHeading>
          <p className="w-75"><i>Excerpt: </i>{markdownRemark.excerpt}</p>
          <p>
          </p>

          <SideMainLayout
            side={
              <div style={{border:"1px solid grey", borderRadius:0}} className="card p-4 border-radius-0">

                <div>
                  <i>Author(s)</i>
                </div>
                <div>
                  ReInHerit Project
                </div>
                <br />

                <div>
                  <i>Publication date</i>
                </div>
                <div>{frontmatter.date}</div>
                <br />

                {/* <div>
                  <i>Terms of reuse</i>
                </div>
                <div>MIT - CC BY 4.0</div>
                <br /> */}
              </div>
            }
          >
            <Container fluid className="bg-white card p-4 mb-2" style={{border:"1px solid grey", borderRadius:0}}>
              <img src={frontmatter.mainImage}></img>
            </Container>
            <Container fluid className="bg-white card p-4" style={{border:"1px solid grey", borderRadius:0}}>
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
    markdownRemark(frontmatter: {pageId : {eq:$id}}) {
      html
      frontmatter {
        date
        title
        thumbnail
        type
        date
        mainImage
      }
      id
      excerpt
    }
  }

`
