import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"
import { Col, Row, Badge, Button } from "react-bootstrap"

/**
 * Generated overview over factsheets items
 * @returns
 */
const FactsheetsFeed: React.FC = () => {
const data: FactsheetsQueryData.Data = useStaticQuery(FactsheetsQuery)

  return (
    <>
       <ReinCardGrid>
      {data.allMarkdownRemark.edges.map(edge => {
       return ( 
         <ReinGridCard
            key={edge.node.frontmatter.pageId}
            body={edge.node.excerpt}
            title={edge.node.frontmatter.title}
            url={`/factsheets/${edge.node.frontmatter.pageId}`}
            uid={edge.node.frontmatter.pageId}
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

const FactsheetsQuery = graphql`
query FactsheetsQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/factsheets/"}}) {
    edges {
      node {
        frontmatter {
          title
          pageId
          date(fromNow: true)
          target_audience
          layout
          theme
          thumbnail
          mainImage
          abstract
        }
        excerpt
        html
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