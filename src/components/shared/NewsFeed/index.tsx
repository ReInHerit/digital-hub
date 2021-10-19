import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
import { useReinTheme } from "../../../hooks/contexts/useReinTheme";

/**
 * Component reading out data from markdown files at build time using gatsby.
 * @returns 
 */
const NewsFeed: React.FC = () => {
  const data: NewsQueryData.Data = useStaticQuery(NEWS_QUERY);

  // used to display data conditionally to target audience
  const { theme } = useReinTheme();

  return (
    <>
      {data.allMarkdownRemark.edges.map(edge => {
        if(!edge.node.frontmatter.target_audience.includes(theme.groupKey))return null;
        return (
        <>
        <h2 className="h6"><small>{edge.node.frontmatter.title}</small></h2>
        <Container className="shadow p-4 mb-4">
          <div dangerouslySetInnerHTML={{__html: edge.node.html}}></div>
        </Container>
        </>
      )})}
    </>
  )
}

export default NewsFeed

const NEWS_QUERY = graphql`
  query NewsQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            date(fromNow: true)
            target_audience
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
