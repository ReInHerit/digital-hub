import { graphql } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
// import { useReinLocalStorage } from "../hooks/useReinLocalStorage"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const addBreadCrumbTypeAware = (type) => {
    let breadCrumbObj = {};
    let addObj = {}
   
    switch(type){
        case "about":
          breadCrumbObj.label = "About"
          breadCrumbObj.value = "/about"
          addObj.label = "..."
          addObj.value = "/about"
          break;
        case "eshopdoc":
          breadCrumbObj.label = "E-Shop Documentation"
          breadCrumbObj.value = "/eshopdoc"
          addObj.label = "..."
          addObj.value = "/eshopdoc"
          break;
        case "hackathonnicosia":
          breadCrumbObj.label = "ReInHerit Hackathon in Nicosia"
          breadCrumbObj.value = "/hackathonnicosia"
          addObj.label = "..."
          addObj.value = "/hackathonnicosia"
          break;
        case "handbook":
          breadCrumbObj.label = "ReInHerit Handbook"
          breadCrumbObj.value = "/handbook"
          addObj.label = "..."
          addObj.value = "/handbook"
          break;
        case "museumcalls":
          breadCrumbObj.label = "Museum Calls"
          breadCrumbObj.value = "/museumcalls"
          addObj.label = "..."
          addObj.value = "/museumcalls"
          break;
        default:
          breadCrumbObj.label = "ReInHerit travelling exhibitions"
          breadCrumbObj.value = "/travellingexhib"
          addObj.label = "..."
          addObj.value = "/travellingexhib"
          break;
    }
  }

  return (
    <BaseLayout>
      <MainHeading  
//          subHeading={
//          frontmatter.type.charAt(0).toUpperCase() +
//          frontmatter.type.slice(1, frontmatter.type.length)
//        }
//        subText={frontmatter.desc ? frontmatter.desc : markdownRemark.excerpt}
        breadCrumb={addBreadCrumbTypeAware(frontmatter.type)}
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
              <a style={{borderRadius:0}} href={frontmatter.mainImage} download="mainImage" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Click this button to download it.</a>
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
