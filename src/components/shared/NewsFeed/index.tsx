import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { Badge, Container } from "react-bootstrap"
import { reinheritStatics } from "../../../data/reinheritStatics";
import { reinheritThemes } from "../../../data/reinheritThemes";
import { useReinTheme } from "../../../hooks/contexts/useReinTheme";

/**
 * Component reading out data from markdown files at build time using gatsby.
 * @returns 
 */
const NewsFeed: React.FC = () => {
  const data: NewsQueryData.Data = useStaticQuery(NEWS_QUERY);

  // used to display data conditionally to target audience
  const { theme } = useReinTheme();

  /**
   * Calculates gatsby routes to be sent via clicking on a badge in the news cards.
   * @param groupKey 
   * @returns 
   */
  const handleBadgeMode = (groupKey: string) => {

    const isBrowser = () => typeof window !== "undefined"

    // needs to be done to solve SSR rendering errors for gatsby.
    if(isBrowser()){
      return `${window.location.pathname}?mode=${reinheritStatics[groupKey].REST_MODE_VAL}`
    } else {
      return ""
    }
  }

  return (
    <>
      <p>You are currently seeing news available for: <b>{reinheritStatics[theme.groupKey].LABEL}</b></p>
      {data.allMarkdownRemark.edges.map(edge => {
        if(!edge.node.frontmatter.target_audience.includes(theme.groupKey))return null;
        return (
        <>
        <h2 className="h6"><small>{edge.node.frontmatter.title}</small></h2>
        <Container className="shadow p-4 mb-4">
          <div dangerouslySetInnerHTML={{__html: edge.node.html}}></div>
          {edge.node.frontmatter.target_audience.map(audience => <Link className="text-decoration-none" to={handleBadgeMode(audience)}><Badge bg="none"  className="m-1" style={{background: reinheritThemes[audience].MAIN_COLOR}}>{reinheritStatics[audience].LABEL}</Badge></Link>)}
          
        </Container>
        </>
      )})}
    </>
  )
}

export default NewsFeed

const NEWS_QUERY = graphql`
  query NewsQuery {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "news"}}}) {
      edges {
        node {
          html
          frontmatter {
            title
            date(fromNow: true)
            target_audience
            layout
          }
        }
      }
    }
  }
`

declare module NewsQueryData {
  export interface Frontmatter {
    title: string
    date: string
    target_audience:string[]
  }

  export interface Node {
    html: string
    frontmatter: Frontmatter
  }

  export interface Edge {
    node: Node
  }

  export interface AllMarkdownRemark {
    edges: Edge[]
  }

  export interface Data {
    allMarkdownRemark: AllMarkdownRemark
  }

  export interface Extensions {}

  export interface RootObject {
    data: Data
    extensions: Extensions
  }
}
