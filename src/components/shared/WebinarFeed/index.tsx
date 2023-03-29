import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import SideMainLayout from "../Layout/SideMainLayout"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"
import { Row, Badge} from "react-bootstrap"

const TrainingFeed: React.FC = () => {
  const data: TrainingModel.Data = useStaticQuery(TRAINING_QUERY)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map((training, i) => (
        <ReinGridCard
          key={training.node.frontmatter.pageId}
          url={`/webinars/${training.node.frontmatter.pageId}`}
          title={training.node.frontmatter.title}
          body={training.node.excerpt}
          uid={training.node.frontmatter.pageId}
          footerContent={
            <Row>
            <Badge className={
            [
              training.node.frontmatter.theme === "Technology" && "badge rounded-pill bg-primary float-end", 
              training.node.frontmatter.theme === "Management" && "badge rounded-pill bg-warning float-end",
              training.node.frontmatter.theme === "Tourism" && "badge rounded-pill bg-success float-end",
              training.node.frontmatter.theme === "Other" && "badge rounded-pill bg-secondary float-end",
            ]
            }
            style={{ fontSize: "1em", fontWeight: "normal", padding: "0.75em"}}>{training.node.frontmatter.theme}
            </Badge>
          </Row>
        }


        >
          {training.node.frontmatter.thumbnail && <Thumbnail src={training.node.frontmatter.thumbnail}></Thumbnail>}
        </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default TrainingFeed

const TRAINING_QUERY = graphql`
  query TrainingQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/webinars/" } }
    sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          html
          excerpt
          frontmatter {
            pageId
            title
            theme
            date(fromNow: true)
            target_audience
            thumbnail
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
    pageId: string,
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
