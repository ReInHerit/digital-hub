import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Accordion } from "react-bootstrap"

/**
 * Renders some kind of overview of manuals stored as markdowns via NetlifyCMS
 * @returns
 */
const ManualsFeed: React.FC = () => {
  const data: ManualsGraphQLResponse.Data = useStaticQuery(
    MANUALS_GRAPHQL_RESPONSE
  )

  return (
    <Accordion>
      {data.allMarkdownRemark.edges.sort().map(edge => (
        <Accordion.Item eventKey={edge.node.frontmatter.pageId}>
          <Accordion.Header>{edge.node.frontmatter.title}</Accordion.Header>
          <Accordion.Body>
            <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
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
          html
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
    html: string
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
