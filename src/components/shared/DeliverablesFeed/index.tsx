import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import { Row, Col} from "react-bootstrap"

const DeliverablesFeed: React.FC = () => {
  const data: DeliverablesModel.Data = useStaticQuery(DELIVERABLES_QUERY)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map((Deliverables, i) => (
        <ReinGridCard
          key={Deliverables.node.frontmatter.pageId}
          title={Deliverables.node.frontmatter.title}
          body={Deliverables.node.frontmatter.description}
          uid={Deliverables.node.frontmatter.pageId}
          footerContent={
            <Row>
            {Deliverables.node.frontmatter.mainImage &&
                  Deliverables.node.frontmatter.mainImage.length !== 0 && (
              <a style={{borderRadius:0}} href={Deliverables.node.frontmatter.mainImage} download="mainImage" className="btn btn-info border-radius-0" target="_blank" rel="noreferrer">Download deliverable as PDF.</a>
                  )}
            </Row>
          }
        > 
            </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default DeliverablesFeed

const DELIVERABLES_QUERY = graphql`
  query DeliverablesQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(/deliverables/)/" } }
    sort: {fields: frontmatter___date, order: ASC}
    ) {
      edges {
        node {
          html
          excerpt
          frontmatter {
            pageId
            title
            target_audience
            description
            mainImage
          }
        }
      }
    }
  }
`

declare module DeliverablesModel {
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
