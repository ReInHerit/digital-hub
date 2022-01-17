import React from "react"
import { graphql, Link } from "gatsby"
import BaseLayout from "../components/static/BaseLayout"
import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <BaseLayout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 className="h2">{frontmatter.title}</h1>
          <p><FontAwesomeIcon icon={faArrowAltCircleLeft} /> <Link to={`/${frontmatter.type}`}>{frontmatter.type.charAt(0).toUpperCase() + frontmatter.type.slice(1)} overview</Link></p>
          <br/>
          <Row>
            <Col lg={2}>
              {/* {markdownRemark.id} */}
              <div><b className="text-secondary">Author(s)</b></div>
              <div>{markdownRemark.author ? markdownRemark.author : "ReInHerit project team"}</div>
              <br/>

              <div><b className="text-secondary">Publication date</b></div>
              <div>{frontmatter.date}</div>
              <br/>

              <div><b className="text-secondary">Cite as</b></div>
              <div>"Mustermann, Max; Doing development, ... "</div>
              <br/>

              <div><b className="text-secondary">Terms of reuse</b></div>
              <div>MIT - CC BY 4.0</div>
              <br/>
            </Col>
            <Col lg={10}>
              <Container fluid className="bg-white rounded shadow p-4">
                <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </Container>
            </Col>
          </Row>
        </div>
    </div>
    </BaseLayout>
    
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        type
        target_audience
        tool_type
        author
      }
      id
    }
  }`