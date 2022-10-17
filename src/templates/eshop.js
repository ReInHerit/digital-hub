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
      <MainHeading
        subHeading={
          <>
            This resource is part of the{" "}
            <Link
              className="text-primary text-dark text-decoration-none"
              to={`/${frontmatter.type}`}
            >
              {frontmatter.type}
            </Link>{" "}
            section.
          </>
        }
        breadCrumb={[
          {label:"Eshop", value:"/eshop"},
          {label:"...", value:"/eshop"},
        ]}
        subText={markdownRemark.excerpt}
      >
        {frontmatter.title}
      </MainHeading>
      <div id="markdown_container" className="blog-post-container">
        <div className="blog-post">
          <SideMainLayout
            side={
              <div className="card p-4 border-0 shadow bg-white">
                {frontmatter.museum &&
                  frontmatter.museum.length !== 0 && (
                    <>
                      <div>
                        <i>Museum</i>
                      </div>
                      <div>
                        <ul>
                          {frontmatter.museum.map(String => {
                            const [Id, Title] = String.split("____")

                            return (
                              <li>
                                <Link to={`/eshop/${Id}`}>
                                  {Title}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                      <br></br>
                    </>
                  )}
                {frontmatter.product_type &&
                  frontmatter.product_type.length !== 0 && (
                    <>
                      <div>
                        <i>Product type</i>
                      </div>
                      <div>
                        <ul>
                          {frontmatter.product_type.map(String => {
                            const [Id, Title] = String.split("____")

                            return (
                              <li>
                                <Link to={`/eshop/${Id}`}>
                                  {Title}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                      <br></br>
                    </>
                  )}

                {/* <div>
                  <i>Terms of reuse</i>
                </div>
                <div>MIT - CC BY 4.0</div>
                <br /> */}
              </div>
            }
          >
            <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
              <img src={frontmatter.thumbnail}></img>
              <a style={{borderRadius:0}} href={frontmatter.mainImage} download="eshop_item" className="btn btn-light border-radius-0" target="_blank">Have a closer look!</a>
            </Container>
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
        thumbnail
        type
        date
        mainImage
        museum
        product_type
      }
      id
      excerpt
    }
  }
`
