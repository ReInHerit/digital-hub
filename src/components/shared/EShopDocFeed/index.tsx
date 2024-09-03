import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"

const EShopDocFeed: React.FC = () => {
  const data: EShopDocModel.Data = useStaticQuery(ESHOPDOC_QUERY)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map((EShopDoc, i) => (
        <ReinGridCard
          key={EShopDoc.node.frontmatter.pageId}
          url={`/eshopdoc/${EShopDoc.node.frontmatter.pageId}`}
          title={EShopDoc.node.frontmatter.title}
          body={EShopDoc.node.excerpt}
          uid={EShopDoc.node.frontmatter.pageId}
        >
        </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default EShopDocFeed

const ESHOPDOC_QUERY = graphql`
  query EShopDocQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(/eshopdoc/)/" } }
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
          }
        }
      }
    }
  }
`

declare module EShopDocModel {
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
