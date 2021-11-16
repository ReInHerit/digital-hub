import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
import { useReinSoftAuth } from "../../../hooks/contexts/useReinSoftAuth"
import NetlifyEmbed from "../NetlifyEmbed"

const TrainingFeed: React.FC = () => {
  const data: TrainingModel.Data = useStaticQuery(TRAINING_QUERY)
  const auth = useReinSoftAuth()

  return (
    <>
      <h2 className="h4">Training Feed</h2>
      {auth.signedIn && (
        <>
          <a href="/admin/admin.html#/collections/training" target="_blank">
            Add Training material here
          </a>
          <NetlifyEmbed
            htmlLoc="/admin/admin.html#/collections/training/"
            style={{
              width: "100%",
              height: "100vh",
              border: "2px solid lightgrey",
            }}
          />
        </>
      )}

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
