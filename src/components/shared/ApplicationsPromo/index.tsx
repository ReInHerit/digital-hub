import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import { Link } from "gatsby"
import { Col, Row, Container } from "react-bootstrap"
import Thumbnail from "../Thumbnail"


/**
 * Generated overview over Podcast items
 * @returns
 */
const ApplicationPromoFeed: React.FC = () => {
const data: ApplicationPromoData.Data = useStaticQuery(ApplicationPromoQuery)

  return (
    <>
       <ReinCardGrid>
      {data.allMarkdownRemark.edges.map(edge => {
       return ( 
         <ReinGridCard
            key={edge.node.frontmatter.pageId}
            body={edge.node.excerpt}
            title={edge.node.frontmatter.title}
            url={`/tools/apps/${edge.node.frontmatter.pageId}`}
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

export default ApplicationPromoFeed;

const ApplicationPromoQuery = graphql`
query ApplicationPromoQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/toolapps/"}, frontmatter: {target_audience: {eq: "VISITOR"}}}
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
          chatApps
        }
      }
    }
  }
}
`

declare module ApplicationPromoData {
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