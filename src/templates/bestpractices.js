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
       breadCrumb={[
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
                  <i>Theme</i>
                </div>
                <div>{frontmatter.theme}</div>
                <br />
                <div>
                </div>
                <div>
                <a style={{borderRadius:0}} href={frontmatter.pdf} download="bestpractice_pdf" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Download PDF</a>
            </div>
              </div>
            }
          >
    
      <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
              <div><i>{frontmatter.desc}</i></div>
              <br />
              <div>
                  <b>Organisation in charge of best practice</b>
                </div>
                <div>{frontmatter.orgbestpractice}</div>
                <br />
              <div>
                  <b>Location</b>
                </div>
                <div>{frontmatter.locationbestpractice}</div>
                <br />
                <div>
                  <b>Dates</b>
                </div>
                <div>{frontmatter.timebestpractice}</div>
                <br />
                <div><b>Description</b></div>            
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <div>
                  <b>Links</b>
              </div>
              <div>
                <a href={`${frontmatter.urlsbestpractice}`} target="_blank" rel="noreferrer">{frontmatter.urlsbestpractice}</a><br />
                {frontmatter.urlsbestpracticeTwo &&
                  frontmatter.urlsbestpracticeTwo.length !== 0 && (
                <a href={`${frontmatter.urlsbestpracticeTwo}`} target="_blank" rel="noreferrer">{frontmatter.urlsbestpracticeTwo}</a>
                )}
                <br />
                {frontmatter.urlsbestpracticeThree &&
                  frontmatter.urlsbestpracticeThree.length !== 0 && (
                <a href={`${frontmatter.urlsbestpracticeThree}`} target="_blank" rel="noreferrer">{frontmatter.urlsbestpracticeThree}</a>
                )}
                </div>
              <br />
              <div>
                  <b>Resources needed</b>
              </div>
              <div>{frontmatter.resourcesbestpractice}</div>
              <br />
              <div>
                  <b>Challenges encountered</b>
              </div>
              <div>{frontmatter.challengesbestpractice}</div>
              <br />
              <div>
                  <b>Evidence of success</b>
              </div>
              <div>{frontmatter.successbestpractice}</div>
              <br />
              <div>
                  <b>Potential for transfer</b>
              </div>
              <div>{frontmatter.transferbestpractice}</div>
              <br />
              <div>
                  <b>Further Information</b>
              </div>
              <div>{frontmatter.infosbestpractice}</div>
              <br />
           
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
        urlsbestpracticeTwo
        urlsbestpracticeThree
        pdf
        theme
        type          
    }
  id
  excerpt
  }
}

`
