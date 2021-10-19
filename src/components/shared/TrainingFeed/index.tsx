import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"

const TrainingFeed: React.FC = () => {
  const data: TrainingModel.Data = useStaticQuery(TRAINING_QUERY)

  return (
    <>
      <h2 className="h4">Training Feed</h2>
      {data.allMarkdownRemark.edges.map(edge => (
        <Container className="p-3 shadow">
          <p>{edge.node.frontmatter.title}</p>
          <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
        </Container>
      ))}
    </>
  )
}

export default TrainingFeed

const TRAINING_QUERY = graphql`
  query TrainingQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "training" } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            date(fromNow: true)
            target_audience
            training_type
          }
        }
      }
    }
  }
`

declare module TrainingModel {
  export interface Frontmatter {
    title: string
    date: string
    target_audience: string[]
    training_type: string[]
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
