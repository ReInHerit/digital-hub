import { faRss } from "@fortawesome/free-solid-svg-icons"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"

/**
 *
 * @returns
 */
const ToolkitFeed: React.FC = () => {
  const data: ToolsQueryData.Data = useStaticQuery(ToolsQuery)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map(edge => (
        <ReinGridCard
          key={edge.node.fields.typeCountId}
          excerpt={edge.node.excerpt}
          faIcon={faRss}
          targetAudience={edge.node.frontmatter.target_audience}
          title={edge.node.frontmatter.title}
          type="news"
          url={`/content/toolkits/${edge.node.fields.typeCountId}?mode=${""}`}
          uid={edge.node.fields.typeCountId}
        >
          <span>{edge.node.fields.typeCountId}</span>
        </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default ToolkitFeed

const ToolsQuery = graphql`
  query ToolsQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/tools/" } }) {
      edges {
        node {
          id
          html
          excerpt
          fields {
            typeCountId
          }
          frontmatter {
            title
            date(fromNow: true)
            target_audience
            layout
          }
        }
      }
    }
  }
`

declare module ToolsQueryData {
  export interface Fields {
    typeCountId: string
  }

  export interface Frontmatter {
    title: string
    date: string
    target_audience: string[]
    layout?: any
  }

  export interface Node {
    id: string
    html: string
    excerpt: string
    fields: Fields
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
