import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"

const GameDocFeed: React.FC = () => {
const data: GameDocQueryData.Data = useStaticQuery(GameDocQuery)

  return (
    <ReinCardGrid>
    {data.allMarkdownRemark.edges.map((gamedoc, i) => (
      <ReinGridCard
        key={gamedoc.node.frontmatter.pageId}
        url={`/gamedoc/${gamedoc.node.frontmatter.pageId}`}
        title={gamedoc.node.frontmatter.title}
        body={gamedoc.node.excerpt}
        uid={gamedoc.node.frontmatter.pageId}
        >
        {gamedoc.node.frontmatter.thumbnail && <Thumbnail src={gamedoc.node.frontmatter.thumbnail}></Thumbnail>}
      </ReinGridCard>
    ))}
  </ReinCardGrid>
  )
}

export default GameDocFeed 

const GameDocQuery = graphql`
query GameDocQuery {
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/(/gamedoc/)/" } }
    sort: {fields: frontmatter___title, order: DESC}
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
          license
          mainImage
        }
      }
    }
  }
}
`

declare module GameDocQueryData {
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