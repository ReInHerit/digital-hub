import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"

const HandbookFeed: React.FC = () => {
  const data: HandbookModel.Data = useStaticQuery(HANDBOOK_QUERY)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map((Handbook, i) => (
        <ReinGridCard
          key={Handbook.node.frontmatter.pageId}
          url={`/handbook/${Handbook.node.frontmatter.pageId}`}
          title={Handbook.node.frontmatter.title}
          body={Handbook.node.excerpt}
          uid={Handbook.node.frontmatter.pageId}
          >
          {Handbook.node.frontmatter.thumbnail && <Thumbnail src={Handbook.node.frontmatter.thumbnail}></Thumbnail>}
        </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default HandbookFeed

const HANDBOOK_QUERY = graphql`
  query HandbookQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(/handbook/)/" } }
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

declare module HandbookModel {
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
