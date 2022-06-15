import { graphql, useStaticQuery } from "gatsby"
import React from "react"

/**
 * Renders some kind of overview of manuals stored as markdowns via NetlifyCMS
 * @returns 
 */
const ManualsFeed: React.FC = () => {
  const data: ManualsGraphQLResponse.Data = useStaticQuery(
    MANUALS_GRAPHQL_RESPONSE
  )

  return (
    <ul>
      {data.allMarkdownRemark.edges.map(edge => (
        <li key={edge.node.frontmatter.pageId}>
          {edge.node.frontmatter.title}
        </li>
      ))}
    </ul>
  )
}

export default ManualsFeed

const MANUALS_GRAPHQL_RESPONSE = graphql`
  query ManualsFeedQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/howtos/" } }) {
      edges {
        node {
          frontmatter {
            title
            pageId
          }
          excerpt
        }
      }
    }
  }
`

declare module ManualsGraphQLResponse {
  export interface Frontmatter {
    title: string
    pageId: string
  }

  export interface Node {
    frontmatter: Frontmatter
    excerpt: string
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
