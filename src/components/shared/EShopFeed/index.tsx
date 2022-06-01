import { faImage } from "@fortawesome/free-solid-svg-icons"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"

/**
 * Generated overview over eshop items
 * @returns
 */
const EShopFeed: React.FC = () => {
  const data: EshopQueryData.Data = useStaticQuery(EshopQuery)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map(edge => (
        <ReinGridCard
          body={edge.node.excerpt}
          title={edge.node.frontmatter.title}
          url={`/eshop/${edge.node.frontmatter.pageId}`}
          uid={edge.node.frontmatter.pageId}
        >
          <img style={{maxWidth:200}} src={edge.node.frontmatter.thumbnail}></img>
        </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default EShopFeed

const EshopQuery = graphql`
  query EshopQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/eshop/" }, frontmatter: {} }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            pageId
            title
            thumbnail
          }
        }
      }
    }
  }
`

declare module EshopQueryData {
  export interface Frontmatter {
    title: string
    thumbnail: string
    pageId: string
  }

  export interface Node {
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
