import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"

const FirstPerfDocFeed: React.FC = () => {
  const data: FirstPerfDocModel.Data = useStaticQuery(FIRSTPERFDOC_QUERY)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map((FirstPerfDoc, i) => (
        <ReinGridCard
          key={FirstPerfDoc.node.frontmatter.pageId}
          url={`/firstperfdoc/${FirstPerfDoc.node.frontmatter.pageId}`}
          title={FirstPerfDoc.node.frontmatter.title}
          body={FirstPerfDoc.node.excerpt}
          uid={FirstPerfDoc.node.frontmatter.pageId}
          >
          {FirstPerfDoc.node.frontmatter.thumbnail && <Thumbnail src={FirstPerfDoc.node.frontmatter.thumbnail}></Thumbnail>}
        </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default FirstPerfDocFeed

const FIRSTPERFDOC_QUERY = graphql`
  query FirstPerfDocQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(/firstperfdoc/)/" } }
    sort: {fields: frontmatter___date, order: ASC}
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

declare module FirstPerfDocModel {
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
