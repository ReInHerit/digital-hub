import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import SideMainLayout from "../Layout/SideMainLayout"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"

const DocFeed: React.FC = () => {
  const data: DocModel.Data = useStaticQuery(DOC_QUERY)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map((Doc, i) => (
        <ReinGridCard
          key={Doc.node.frontmatter.pageId}
          url={`/doc/${Doc.node.frontmatter.pageId}`}
          title={Doc.node.frontmatter.title}
          body={Doc.node.excerpt}
          uid={Doc.node.frontmatter.pageId}
        >
        </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default DocFeed

const DOC_QUERY = graphql`
  query DocQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(/doc/)/" } }
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

declare module DocModel {
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
