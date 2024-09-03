import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"

const TravellingExhibFeed: React.FC = () => {
  const data: TravellingExhibModel.Data = useStaticQuery(TRAVELLINGEXHIB_QUERY)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map((TravellingExhib, i) => (
        <ReinGridCard
          key={TravellingExhib.node.frontmatter.pageId}
          url={`/travellingexhib/${TravellingExhib.node.frontmatter.pageId}`}
          title={TravellingExhib.node.frontmatter.title}
          body={TravellingExhib.node.excerpt}
          uid={TravellingExhib.node.frontmatter.pageId}
          >
          {TravellingExhib.node.frontmatter.thumbnail && <Thumbnail src={TravellingExhib.node.frontmatter.thumbnail}></Thumbnail>}
        </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default TravellingExhibFeed

const TRAVELLINGEXHIB_QUERY = graphql`
  query TravellingExhibQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(/travellingexhib/)/" } }
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

declare module TravellingExhibModel {
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
