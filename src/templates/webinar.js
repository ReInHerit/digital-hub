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
      breadCrumb={[
          {label:"Webinars", value:"/webinars"},
          {label:"...", value:"/webinars"},
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
                  <i>Theme</i>
                </div>
                <div>{frontmatter.theme}</div>
                <br />
                <div>
                {frontmatter.linkedReInHeritcontent &&
                  frontmatter.linkedReInHeritcontent.length !== 0 && (
                    <>
                      <div>
                        <i>Relevant ReInHerit content</i>
                      </div>
                     {/* <div>
                        <ul>
                          {frontmatter.linkedReInHeritcontent.map(linkedString => {
                            const [pageId, title] = linkedString.split("____")

                            return (
                              <li>
                                <Link to={`${pageId}`}>
                                  {title}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div> */}
                      <br></br>
                    </>
                  )}
                </div>
                <br />
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
              </div>
            }
          >

        <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <a style={{borderRadius:0}} href={frontmatter.slides} download="webinar_slides" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click this button to download the slides.</a>
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
      slides
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
