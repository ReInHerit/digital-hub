import React from "react"
import { graphql, Link } from "gatsby"
import BaseLayout from "../components/static/BaseLayout"
import { Container } from "react-bootstrap"
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

  const { mapFaSymbol } = useReinLocalStorage()

  const addBreadCrumbTypeAware = (type) => {
    let breadCrumbObj = {};
    let addObj = {}

    switch(type){
      case "toolcomponent":
        breadCrumbObj.label = "Tool-components"
        breadCrumbObj.value = "/tools/components"
        addObj.label = "..."
        addObj.value = "/tools/components"
        break;
      case "toolapp":
        breadCrumbObj.label = "Tool-apps"
        breadCrumbObj.value = "/tools/apps"
        addObj.label = "..."
        addObj.value = "/tools/apps"
        break;
      case "news":
        breadCrumbObj.label = "News"
        breadCrumbObj.value = "/news"
        addObj.label = "..."
        addObj.value = "/news"
        break;
      case "webinar":
        breadCrumbObj.label = "Webinars"
        breadCrumbObj.value = "/webinar"
        addObj.label = "..."
        addObj.value = "/webinar"
        break;
      default:
        breadCrumbObj.label = "Tool-components"
        breadCrumbObj.value = "/tools/components"
        addObj.label = "..."
        addObj.value = "/tools/components"
        break;
    }

    return [breadCrumbObj, addObj]

  }

  return (
    <BaseLayout>
      <MainHeading
        subHeading={
          frontmatter.type.charAt(0).toUpperCase() +
          frontmatter.type.slice(1, frontmatter.type.length)
        }
        subText={frontmatter.desc ? frontmatter.desc : markdownRemark.excerpt}
        breadCrumb={addBreadCrumbTypeAware(frontmatter.type)}
      >
        {frontmatter.title}
      </MainHeading>
      <div className="blog-post-container" id="markdown_container">
        <div className="blog-post">
          <SideMainLayout
            side={
              <div className="bg-white card p-4 mb-2 border-0 shadow">
                {frontmatter.link && (
                  <>
                    <div>
                      <i>Main reference</i>
                    </div>
                    <div>
                      <a target="_blank" href={frontmatter.link}>
                        <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                      </a>
                    </div>
                    <br />
                  </>
                )}

                {frontmatter.linkedWebinars &&
                  frontmatter.linkedWebinars.length !== 0 && (
                    <>
                      <div>
                        <i>Referenced webinar(s)</i>
                      </div>
                      <div>
                        <ul>
                          {frontmatter.linkedWebinars.map(webinarString => {
                            const [
                              webinarId,
                              webinarTitle,
                            ] = webinarString.split("____")

                            return (
                              <li>
                                <Link to={`/webinars/${webinarId}`}>
                                  {webinarTitle}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                      <br></br>
                    </>
                  )}

                {frontmatter.linkedToolkitComponents &&
                  frontmatter.linkedToolkitComponents.length !== 0 && (
                    <>
                      <div>
                        <i>Referenced components(s)</i>
                      </div>
                      <div>
                        <ul>
                          {frontmatter.linkedToolkitComponents.map(
                            componentString => {
                              const [
                                componentId,
                                componentTitle,
                              ] = componentString.split("____")

                              return (
                                <li>
                                  <Link to={`/tools/components/${componentId}`}>
                                    {componentTitle}
                                  </Link>
                                </li>
                              )
                            }
                          )}
                        </ul>
                      </div>
                      <br></br>
                    </>
                  )}

                {frontmatter.linkedToolkitApps &&
                  frontmatter.linkedToolkitApps.length !== 0 && (
                    <>
                      <div>
                        <i>Referenced app(s)</i>
                      </div>
                      <div>
                        <ul>
                          {frontmatter.linkedToolkitApps.map(appString => {
                            const [appId, appTitle] = appString.split("____")

                            return (
                              <li>
                                <Link to={`/tools/apps/${appId}`}>
                                  {appTitle}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                      <br></br>
                    </>
                  )}

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
            <Container fluid className="bg-white card p-4 mb-2 border-0 shadow">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </Container>
            {frontmatter.tutorial && (
              <>
                <br></br>
                <h2>Tutorials</h2>
                <ReactMarkdown>
                  {frontmatter.tutorial.replace("youtube: ", "")}
                </ReactMarkdown>
              </>
            )}
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
        date(formatString: "MMMM DD, YYYY")
        title
        mainReference
        type
        target_audience
        author
        linkedWebinars
        linkedToolkitComponents
        linkedToolkitApps
        desc
      }
      id
      excerpt
    }
  }
`
