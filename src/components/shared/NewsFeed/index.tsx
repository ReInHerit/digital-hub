import { faRss } from "@fortawesome/free-solid-svg-icons"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { reinheritStatics } from "../../../data/reinheritStatics"
import { useReinLocalStorage } from "../../../hooks/useReinLocalStorage"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"

/**
 * Component reading out data from markdown files at build time using gatsby.
 * @returns
 */
const NewsFeed: React.FC = () => {
  const data: NewsQueryData.Data = useStaticQuery(NEWS_QUERY)

  const ReinStorage = useReinLocalStorage<boolean>()

  /**
   * Calculates gatsby routes to be sent via clicking on a badge in the news cards.
   * @param groupKey
   * @returns
   */
  const handleBadgeMode = (groupKey: string) => {
    const isBrowser = () => typeof window !== "undefined"
    // needs to be done to solve SSR rendering errors for gatsby.
    if (isBrowser()) {
      return `${location.pathname}?mode=${reinheritStatics[groupKey].REST_MODE_VAL}`
    } else {
      return ""
    }
  }

  return (
    <>

      <ReinCardGrid>
        {data.allMarkdownRemark.edges.map(edge => {
          // if(!edge.node.frontmatter.target_audience.includes(theme.groupKey))return null;
          return (
          <ReinGridCard
            key={edge.node.id}
            body={edge.node.excerpt}
            title={edge.node.frontmatter.title}
            url={`/news/${edge.node.id}`}
            uid={edge.node.id}
          ></ReinGridCard>
        )})}
      </ReinCardGrid>
    </>
  )
}

export default NewsFeed

const NEWS_QUERY = graphql`
  query NewsQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/news/" } }) {
      edges {
        node {
          id
          html
          excerpt
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

declare module NewsQueryData {
  export interface Frontmatter {
    title: string
    date: string
    target_audience: string[]
  }

  export interface Node {
    html: string
    id: string
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
