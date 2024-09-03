import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"

const MuseumCallsFeed: React.FC = () => {
  const data: MuseumCallsModel.Data = useStaticQuery(MUSEUMCALLS_QUERY)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map((MuseumCalls, i) => (
        <ReinGridCard
          key={MuseumCalls.node.frontmatter.pageId}
          url={`/museumcalls/${MuseumCalls.node.frontmatter.pageId}`}
          title={MuseumCalls.node.frontmatter.title}
          body={MuseumCalls.node.excerpt}
          uid={MuseumCalls.node.frontmatter.pageId}
          >
          {MuseumCalls.node.frontmatter.thumbnail && <Thumbnail src={MuseumCalls.node.frontmatter.thumbnail}></Thumbnail>}
        </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default MuseumCallsFeed

const MUSEUMCALLS_QUERY = graphql`
  query MuseumCallsQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(/museumcalls/)/" } }
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

declare module MuseumCallsModel {
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
