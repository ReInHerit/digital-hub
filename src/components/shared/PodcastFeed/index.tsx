import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import { Link } from "gatsby"
import { Col, Row, Container } from "react-bootstrap"

/**
 * Generated overview over Podcast items
 * @returns
 */
const PodcastFeed: React.FC = () => {
const data: PodcastQueryData.Data = useStaticQuery(PodcastQuery)

  return (
    <>
       <ReinCardGrid>
      {data.allMarkdownRemark.edges.map(edge => {
       return ( 
         <ReinGridCard
            key={edge.node.frontmatter.pageId}
            body={edge.node.excerpt}
            title={edge.node.frontmatter.title}
            url={`/news/${edge.node.frontmatter.pageId}`}
            uid={edge.node.frontmatter.pageId}
        >
          </ReinGridCard>
           )
          })
        }      
      </ReinCardGrid>
    </>
  )
}

export default PodcastFeed

const PodcastQuery = graphql`
query MyQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/news/"}, frontmatter: {title: {glob: "Museums Up *"}}}
  ) {
    edges {
      node {
        id
        frontmatter {
          title
        }
      }
    }
  }
}
`

declare module PodcastQueryData {
  export interface Frontmatter {
    title: string
    date: string
    target_audience: string[]
    pageId: string
    mainReference: string | null
    thumbnail?: string
    theme: string
    subtype_news: string
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