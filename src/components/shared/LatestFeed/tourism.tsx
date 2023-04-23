import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { Card, Row, Col, CardGroup} from "react-bootstrap"

const LatestFeedTourism: React.FC = () => {
  const Tourism: LatestPosts.Data = useStaticQuery(LATEST_TOURISM_QUERY)

  return (
    <CardGroup>
        {Tourism.allMarkdownRemark.edges.map((latestFeed, i) => (
        <Card
          key={latestFeed.node.frontmatter.pageId}
          uid={latestFeed.node.frontmatter.pageId}
          style={{height:"45vh", borderColor: "#03cffc", borderWidth: "0.05em"}} 
          className="p-3 me-1 ms-1"
        >
        <Link to={`/${latestFeed.node.frontmatter.type}`+`/${latestFeed.node.frontmatter.pageId}`} className="text-decoration-none text-dark">
        <Card.Title className="mt-2" style={{fontSize:"1em"}}>
        {latestFeed.node.frontmatter.title}       
        </Card.Title>
        <Card.Body style={{fontSize:"0.85em"}}>
            {latestFeed.node.excerpt}
        </Card.Body>
        </Link>
        </Card>
      ))}
    </CardGroup>
  )
}

export default LatestFeedTourism;

const LATEST_TOURISM_QUERY = graphql`
query Tourism($date: DateQueryOperatorInput = {}) {
    allMarkdownRemark(
      filter: {frontmatter: {theme: {eq: "Tourism"}, date: $date}}
      limit: 3
      sort: {order: DESC, fields: frontmatter___date}
    ) {
      edges {
        node {
       frontmatter {
            title
            thumbnail
            pageId
            type
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`

declare module LatestPosts {
  export interface Frontmatter {
    title: string
    thumbnail: string
    type: string
    pageId: string
    theme: string
  }

export interface Node {
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