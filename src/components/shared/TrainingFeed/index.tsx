import { faChalkboard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useReinSoftAuth } from "../../../hooks/contexts/useReinSoftAuth"
import NetlifyEmbed from "../NetlifyEmbed"

const TrainingFeed: React.FC = () => {
  const data: TrainingModel.Data = useStaticQuery(TRAINING_QUERY)
  const auth = useReinSoftAuth()

  return (
    <>
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

      <Row xs={1} md={2} xl={3} className="g-3">
            {data.allMarkdownRemark.edges.map((training, i) => <Col key={training.node.id + "_" + i}>
              <Link to={`/content/training/${training.node.id}`} className="text-decoration-none text-dark">
                <Card className="shadow rounded border-light">
                  <Card.Body>
                    <Card.Title><FontAwesomeIcon icon={faChalkboard} size="1x"/> {training.node.frontmatter.title}</Card.Title>
                    <br/>
                    <Card.Text>
                      {training.node.excerpt}
                    </Card.Text>
                    <br></br>
                    {/* <FontAwesomeIcon icon={assignFa(key as keyof REINHERIT_AUDIENCE)} size="2x"/> */}
                  </Card.Body>
                  <Card.Footer className="bg-light border-0">
                      {training.node.frontmatter.target_audience.map(aud => <small className="text-muted">{aud}-</small>)}
                    </Card.Footer>
                </Card>
              </Link>
            </Col>)}
          </Row>

    </>
  )
}

export default TrainingFeed

const TRAINING_QUERY = graphql`
  query TrainingQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/training/"}}) {
      edges {
        node {
          html
          id
          excerpt
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
    id: string
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
