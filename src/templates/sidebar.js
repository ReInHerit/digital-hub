import { graphql } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
// import { useReinLocalStorage } from "../hooks/useReinLocalStorage"
import BaseLayout from "../components/static/BaseLayout"
import MainHeading from "../components/static/MainHeading"
import SideMainLayout from "../components/shared/Layout/SideMainLayout"
import { Link } from "gatsby" 

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const addBreadCrumbTypeAware = (type) => {
    let breadCrumbObj = {};
    let addObj = {}
   
    switch(type){
      case "doc":
        breadCrumbObj.label = "Hub Documentation"
        breadCrumbObj.value = "/doc"
        addObj.label = "..."
        addObj.value = "/doc"
        break;
      case "firstperfdoc":
        breadCrumbObj.label = "Documentation of the first ReInHerit performance"
        breadCrumbObj.value = "/firstperfdoc"
        addObj.label = "..."
        addObj.value = "/firstperfdoc"
        break;
    default:
        breadCrumbObj.label = "Documentation of the second ReInHerit performance"
        breadCrumbObj.value = "/secondperfdoc"
        addObj.label = "..."
        addObj.value = "/secondperfdoc"
        break;
  }
}
  
  return (
    <BaseLayout>
    <MainHeading
      breadCrumb={addBreadCrumbTypeAware(frontmatter.type)}
    >
      {frontmatter.title}
    </MainHeading>
    <div className="blog-post-container" id="markdown_container">
        <div className="blog-post">
        <SideMainLayout
            side={
              <div className="card p-4 border-0 shadow bg-white">

                {frontmatter.type === "doc" && (
                 <ul>
                 <li><Link to="/doc/2096bb3c-78d3-4d21-b9cc-992e6e170a2f">Technologies overview</Link></li>
                 <li><Link to="/doc/1f06a32f-7619-41da-9d35-afe90a2befee">Information architecture</Link></li>
                 <li><Link to="/doc/bcb081bc-04aa-447b-a817-e9f9c42d8d75">Access levels</Link></li>
                 <li><Link to="/doc/0279ce90-3848-4d27-b2d9-c930838f3417">Manual for contributors</Link></li>
                 <li><Link to="/doc/531acbfb-d484-4c46-9c5c-dc6ed84ef62a">FAQ</Link></li>
                 </ul>
                )}

              {frontmatter.type === "firstperfdoc" && (
                <ul>
                <li><Link to="/firstperfdoc/2b2eb959-f8a5-469d-89c6-43525188aa31">Overview</Link></li>
                <li><Link to="/firstperfdoc/eb809866-948e-4eaa-8a4b-046d410e55b8">Treasure Hunt</Link></li>
                <li><Link to="/firstperfdoc/35e760e6-0ef5-4b72-8618-a32417e01b80">Music Score</Link></li>
                <li><Link to="/firstperfdoc/869216c8-a057-4d2c-9a10-8dc7b585a402">Video Art</Link></li>
                <li><Link to="/firstperfdoc/89f3e2e9-6d10-4018-b127-e13b54303d52">Credits</Link></li>
                </ul>
              )}

              {frontmatter.type === "secondperfdoc" && (
                <ul>
                <li><Link to="/secondperfdoc/efc245bd-2d29-4636-9175-12645bbf1edd">Overview</Link></li>
                <li><Link to="/secondperfdoc/c50742e6-67b5-44b1-881d-73ccd5e92605">Museological Perspectives</Link></li>
                <li><Link to="/secondperfdoc/18546ebc-39d4-4fe8-86c4-65aa506efdd2">Application</Link></li>
                <li><Link to="/secondperfdoc/19b1886e-f2ca-446b-8a43-48443255f850">Music Scores</Link></li>
                <li><Link to="/secondperfdoc/2a98cf27-db12-48d9-8982-2729731600d3">Video Art</Link></li>
                </ul>
              )}
            </div> 
            }
            >
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
      target_audience
      thumbnail
      type
      mainImage
      }
  id
  excerpt
  }
}
`
