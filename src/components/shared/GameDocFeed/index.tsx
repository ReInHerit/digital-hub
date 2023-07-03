import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import { Col, Row, Badge, Button, ListGroup, ListGroupItem } from "react-bootstrap"

/**
 * Generated overview over BestPractices items
 * @returns
 */

const GameDocFeed: React.FC = props => {
const data: GameDocQueryData.Data = useStaticQuery(GameDocQuery)

  return (
    <ListGroup>
        {data.allMarkdownRemark.edges.sort().map(edge => (
        <ListGroupItem style={{border: "0px"}} eventKey={edge.node.frontmatter.pageId}>
          <Link to={`/gamedoc/${edge.node.frontmatter.pageId}`} style={{textDecoration: "none"}}>{edge.node.frontmatter.title}</Link>
          <hr/>
        </ListGroupItem>
        ))}
    </ListGroup>
  )
}

export default GameDocFeed

const GameDocQuery = graphql`
query GameDocQuery {
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/gamedoc/" }, frontmatter: {} }
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
        }
      }
    }
  }
}
`

declare module GameDocQueryData {
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