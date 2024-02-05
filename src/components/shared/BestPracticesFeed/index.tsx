import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"
import { Col, Row, Badge, Button } from "react-bootstrap"

/**
 * Generated overview over BestPractices items
 * @returns
 */
const BestPracticesFeed: React.FC = () => {
const data: BestPracticesQueryData.Data = useStaticQuery(BestPracticesQuery)

  return (
    <>
       <ReinCardGrid>
      {data.allMarkdownRemark.edges.map(edge => {
       return ( 
         <ReinGridCard
            key={edge.node.frontmatter.pageId}
            body={edge.node.excerpt}
            title={edge.node.frontmatter.title}
            url={`/bestpractices/${edge.node.frontmatter.pageId}`}
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

export default BestPracticesFeed

const BestPracticesQuery = graphql`
query BestPracticesQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/bestpractices/"}, frontmatter: {pubstatus: {eq: "completed"}}}
    ) {
    edges {
      node {
        html
        excerpt
        frontmatter {
          title
          pubstatus
          date(fromNow: true)
          target_audience
          pageId
          license
          thumbnail
          abstract
          challengesbestpractice
          desc
          emailbestpractice
          formtypbestpractice
          infosbestpractice
          keywordsbestpractice
          locationbestpractice
          orgbestpractice
          partnerbestpractice
          personsbestpractice
          resourcesbestpractice
          successbestpractice
          timebestpractice
          transferbestpractice
          urlsbestpractice
          theme
          type
        }
      }
    }
  }
}
`

declare module BestPracticesQueryData {
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