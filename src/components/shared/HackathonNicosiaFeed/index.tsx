import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"

const HackathonNicosiaFeed: React.FC = () => {
  const data: HackathonNicosiaModel.Data = useStaticQuery(HACKATHONNICOSIA_QUERY)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map((HackathonNicosia, i) => (
        <ReinGridCard
          key={HackathonNicosia.node.frontmatter.pageId}
          url={`/hackathonnicosia/${HackathonNicosia.node.frontmatter.pageId}`}
          title={HackathonNicosia.node.frontmatter.title}
          body={HackathonNicosia.node.excerpt}
          uid={HackathonNicosia.node.frontmatter.pageId}
          >
          {HackathonNicosia.node.frontmatter.thumbnail && <Thumbnail src={HackathonNicosia.node.frontmatter.thumbnail}></Thumbnail>}
        </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default HackathonNicosiaFeed

const HACKATHONNICOSIA_QUERY = graphql`
  query HackathonNicosiaQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(/hackathonnicosia/)/" } }
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

declare module HackathonNicosiaModel {
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
