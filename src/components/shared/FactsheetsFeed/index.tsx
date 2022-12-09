
import { faWatchmanMonitoring } from "@fortawesome/free-brands-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faStamp, faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"
import { Col, Row, Badge, Button } from "react-bootstrap"
 

/**
 * Component reading out data from markdown files at build time using gatsby.
 * @returns
 */
const FactsheetsFeed: React.FC = () => {
  const data: FactsheetsQueryData.Data = useStaticQuery(FACTSHEETS_QUERY)

  return (
    <>
       <ReinCardGrid>
      {data.allMarkdownRemark.edges.map(edge => {
       ( 
         <ReinGridCard
            key={edge.node.frontmatter.pageId}
            body={edge.node.excerpt}
            title={edge.node.frontmatter.title}
            url={`/factsheets/${edge.node.frontmatter.pageId}`}
            uid={edge.node.frontmatter.pageId}
            footerContent={
              <Row>
            </Row>
          }
        >
          { edge.node.frontmatter.thumbnail && <Thumbnail src={edge.node.frontmatter.thumbnail}></Thumbnail>}
          </ReinGridCard>
           )
          })
        }
        
      </ReinCardGrid>
    </>
  )
}

export default FactsheetsFeed

const FACTSHEETS_QUERY = graphql`
query FactsheetsQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/factsheets/"}}) {
    edges {
      node {
        frontmatter {
          title
          pageId
          date
          target_audience
          thumbnail
          desc
          shortDescription
          theme
        }
      }
    }
  }
}
`

declare module FactsheetsQueryData {
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
