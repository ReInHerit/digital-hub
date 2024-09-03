import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"

const SecondPerfDocFeed: React.FC = () => {
  const data: SecondPerfDocModel.Data = useStaticQuery(SECONDPERFDOC_QUERY)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map((SecondPerfDoc, i) => (
        <ReinGridCard
          key={SecondPerfDoc.node.frontmatter.pageId}
          url={`/secondperfdoc/${SecondPerfDoc.node.frontmatter.pageId}`}
          title={SecondPerfDoc.node.frontmatter.title}
          body={SecondPerfDoc.node.excerpt}
          uid={SecondPerfDoc.node.frontmatter.pageId}
          >
          {SecondPerfDoc.node.frontmatter.thumbnail && <Thumbnail src={SecondPerfDoc.node.frontmatter.thumbnail}></Thumbnail>}
        </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default SecondPerfDocFeed

const SECONDPERFDOC_QUERY = graphql`
  query SecondPerfDocQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(/secondperfdoc/)/" } }
    sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          html
          excerpt
          frontmatter {
            pageId
            title
            date(fromNow: true)
            target_audience
            thumbnail
          }
        }
      }
    }
  }
`

declare module SecondPerfDocModel {
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
