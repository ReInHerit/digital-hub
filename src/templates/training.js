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

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const { mapFaSymbol } = useReinLocalStorage()

  return (
    <BaseLayout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 className="h2">
            {frontmatter.title}{" "}
            <FontAwesomeIcon
              color="lightgrey"
              icon={mapFaSymbol(frontmatter.type)}
            ></FontAwesomeIcon>
          </h1>
          <p className="w-75"><b>Excerpt: </b>{markdownRemark.excerpt}</p>
          <p>
            <FontAwesomeIcon color="lightgrey" icon={faArrowAltCircleLeft} />{" "}
            <Link to={`/${frontmatter.type}`}>
              {frontmatter.type.charAt(0).toUpperCase() +
                frontmatter.type.slice(1)}{" "}
              overview
            </Link>
          </p>
          <br />

          <SideMainLayout
            side={
              <div className="reincard card p-4">

                {frontmatter.link && <><div>
                  <b className="text-secondary">Link</b>
                </div>
                <div>
                  <a target="_blank" href={frontmatter.link}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a>
                </div><br/></>}

                <div>
                  <b className="text-secondary">Author(s)</b>
                </div>
                <div>
                  ReInHerit Project
                </div>
                <br />

                <div>
                  <b className="text-secondary">Publication date</b>
                </div>
                <div>{frontmatter.date}</div>
                <br />

                <div>
                  <b className="text-secondary">Cite as</b>
                </div>
                <div>"Mustermann, Max; Doing development, ... "</div>
                <br />

                <div>
                  <b className="text-secondary">Terms of reuse</b>
                </div>
                <div>MIT - CC BY 4.0</div>
                <br />
              </div>
            }
          >
            <Container fluid className="bg-white card p-4">
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
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        link
        type
        target_audience
        tool_type
        author
        tutorial
      }
      id
      excerpt
    }
  }
`
