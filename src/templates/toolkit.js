import React from "react"
import { graphql, Link } from "gatsby"
import BaseLayout from "../components/static/BaseLayout"
import { Container} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft, faLink } from "@fortawesome/free-solid-svg-icons"
import { useReinLocalStorage } from "../hooks/useReinLocalStorage"
import SideBarsLayout from "../components/shared/Layout/SideBarsLayout"
import SideMainLayout from "../components/shared/Layout/SideMainLayout"
import ReactMarkdown from "react-markdown"
import MainHeading from "../components/static/MainHeading"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const { mapFaSymbol } = useReinLocalStorage();

  return (
    <BaseLayout>
      <div className="blog-post-container">
        <div className="blog-post">
          <MainHeading
            subHeading={<>This resource is part of the <Link style={{textDecoration:"none", color:"#2eacc8"}} to={`/${frontmatter.type}`}>{frontmatter.type}</Link> section.</>}
          >{frontmatter.title}</MainHeading>
          <p className="w-75"><i>Excerpt: </i>{markdownRemark.excerpt}</p>
          <SideMainLayout
            side={
              <div style={{border:"1px solid grey", borderRadius:0}} className="card p-4 border-radius-0">

                {frontmatter.link && <><div>
                  <i>Main reference</i>
                </div>
                <div>
                  <a target="_blank" href={frontmatter.link}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a>
                </div><br/></>}

                {(frontmatter.linkedWebinars && frontmatter.linkedWebinars.length !== 0) && <>
                  <div>
                    <i>Referenced webinar(s)</i>
                  </div>
                  <div>
                    <ul>
                      {frontmatter.linkedWebinars.map(webinarString => {
                      
                        const [webinarId, webinarTitle] = webinarString.split("____");

                        return <li><Link to={`${webinarId}`}>{webinarTitle}</Link></li>
                      })}
                    </ul>
                  </div>
                <br></br></>}

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
                  <i>Cite as</i>
                </div>
                <div>"Mustermann, Max; Doing development, ... "</div>
                <br /> */}

                <div>
                  <i>Terms of reuse</i>
                </div>
                <div>MIT - CC BY 4.0</div>
                <br />
              </div>
            }
          >
            <Container fluid className="bg-white card p-4" style={{border:"1px solid grey", borderRadius:0}}>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </Container>
            {frontmatter.tutorial && <>
              <br></br>
              <h2>Tutorials</h2>
              <ReactMarkdown
              >
                {frontmatter.tutorial.replace("youtube: ", "")}
              </ReactMarkdown>
            </>}
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
        date(formatString: "MMMM DD, YYYY")
        title
        mainReference
        type
        target_audience
        author
        tutorial
        linkedWebinars
      }
      id
      excerpt
    }
  }
`
