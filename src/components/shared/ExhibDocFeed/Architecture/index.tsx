import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import { Col, Row, Badge, Button, ListGroup, ListGroupItem } from "react-bootstrap"

/**
 * Generated overview over Exhibdoc items
 * @returns
 */

const ArchitectureExhibDocFeed: React.FC = props => {
const data: ExhibDocQueryData.Data = useStaticQuery(ArchitectureExhibDocQuery)

  return (
    <ListGroup>
        {data.allMarkdownRemark.edges.sort().map(edge => (
        <ListGroupItem style={{border: "0px"}} eventKey={edge.node.frontmatter.pageId}>
          <Link to={`/exhibdoc/${edge.node.frontmatter.pageId}`} style={{textDecoration: "none"}}>{edge.node.frontmatter.title}</Link>
          <hr/>
        </ListGroupItem>
        ))}
    </ListGroup>
  )
}

export default ArchitectureExhibDocFeed

const ArchitectureExhibDocQuery = graphql`
query ArchitectureExhibDocQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/exhibdoc/"}, frontmatter: {exhibdocsection: {eq: "Architecture"}}}
    sort: {fields: frontmatter___title, order: ASC}
  ) {
    edges {
      node {
        html
        excerpt
        frontmatter {
          title
          date(fromNow: true)
          target_audience
          pageId
          license
          thumbnail
          mainImage
          exhibdocsection
        }
      }
    }
  }
}

`

declare module ExhibDocQueryData {
  export interface Frontmatter {
    title: string
    date: string
    target_audience: string[]
    pageId: string
    mainReference: string | null
    thumbnail?: string
    theme: string
  }

  export interface Node {
    html: string
    excerpt: string
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