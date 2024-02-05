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
y      breadCrumb={[
          {label:"Resources", value:"/resources"},
          {label:"Best Practices", value:"/bestpractices"},
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
                <div>{frontmatter.partnerbestpractice}</div>
                <br />
                <div>
                  <i>Publication date</i>
                </div>
                <div>{frontmatter.date}</div>
                <br />
                <div>
                  <i>Terms of reuse</i>
                </div>
                <div>{frontmatter.license}</div>
                <br />
                <div>
                  <i>Type of best practice</i>
                </div>
                <div>{frontmatter.formtypbestpractice}</div>
                <br />
                <div>
                  <i>Keywords</i>
                </div>
                <div>{frontmatter.keywordsbestpractice}</div>
                <br />
                <div>
                </div>
              </div>
            }
          >
    
      <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
              <div><i>{frontmatter.desc}</i></div>
              <br />
              <div>
                  <i>Organisation in charge of best practice</i>
                </div>
                <div>{frontmatter.orgbestpractice}</div>
                <br />
              <div>
                  <i>Location</i>
                </div>
                <div>{frontmatter.locationbestpractice}</div>
                <br />
                <div>
                  <i>Dates</i>
                </div>
                <div>{frontmatter.timebestpractice}</div>
                <br />
                <div><i>Description</i></div>            
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <div>
                  <i>Links</i>
              </div>
              <div>{frontmatter.urlsbestpractice}</div>
              <br />
              <div>
                  <i>Resources needed</i>
              </div>
              <div>{frontmatter.resourcesbestpractice}</div>
              <br />
              <div>
                  <i>Challenges encountered</i>
              </div>
              <div>{frontmatter.challengesbestpractice}</div>
              <br />
              <div>
                  <i>Evidence of success</i>
              </div>
              <div>{frontmatter.successbestpractice}</div>
              <br />
              <div>
                  <i>Potential for transfer</i>
              </div>
              <div>{frontmatter.transferbestpractice}</div>
              <br />
              <div>
                  <i>Further Information</i>
              </div>
              <div>{frontmatter.infosbestpractice}</div>
              <br />
              {/* <div>
                  <i>Videos</i>
              </div>
              <div>{frontmatter.videosbestpractice}</div>
          <br /> */}

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
        title
        date
        target_audience
        pageId
        license
        thumbnail
        abstract
        challengesbestpractice
        desc
        formtypbestpractice
        infosbestpractice
        keywordsbestpractice
        locationbestpractice
        orgbestpractice
        partnerbestpractice
        resourcesbestpractice
        successbestpractice
        timebestpractice
        transferbestpractice
        urlsbestpractice
        videosbestpractice
        theme
        type          
    }
  id
  excerpt
  }
}

`
