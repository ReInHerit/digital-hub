import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import SideMainLayout from "../Layout/SideMainLayout"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"
import { Row, Badge} from "react-bootstrap"

const AboutFeed: React.FC = () => {
  const data: AboutModel.Data = useStaticQuery(ABOUT_QUERY)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map((About, i) => (
        <ReinGridCard
          key={About.node.frontmatter.pageId}
          url={`/about/${About.node.frontmatter.pageId}`}
          title={About.node.frontmatter.title}
          body={About.node.excerpt}
          uid={About.node.frontmatter.pageId}
        >
          {About.node.frontmatter.thumbnail && <Thumbnail src={About.node.frontmatter.thumbnail}></Thumbnail>}
        </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default AboutFeed

const ABOUT_QUERY = graphql`
  query AboutQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(/about/)/" } }
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

declare module AboutModel {
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
