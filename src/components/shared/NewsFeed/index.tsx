import { faRss } from "@fortawesome/free-solid-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { Badge, Container, Form } from "react-bootstrap"
import { reinheritStatics } from "../../../data/reinheritStatics"
import { reinheritThemes } from "../../../data/reinheritThemes"
import { useReinSoftAuth } from "../../../hooks/contexts/useReinSoftAuth"
import { useReinTheme } from "../../../hooks/contexts/useReinTheme"
import { useReinLocalStorage } from "../../../hooks/useReinLocalStorage"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"

/**
 * Component reading out data from markdown files at build time using gatsby.
 * @returns
 */
const NewsFeed: React.FC = () => {
  const data: NewsQueryData.Data = useStaticQuery(NEWS_QUERY)

  const auth = useReinSoftAuth()
  const ReinStorage = useReinLocalStorage<boolean>()

  // used to display data conditionally to target audience
  const { theme } = useReinTheme()

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
      <p>Login example. User role: {auth.curUserRole}</p>
      {auth.signedIn && (
        <p>
          <a href="/admin/admin.html#/collections/news" target="_blank">
            <Badge bg="" style={{ background: theme.styles.MAIN_COLOR }}>
              Add +{" "}
            </Badge>
          </a>{" "}
          You are currently seeing news available for:{" "}
          <b>{reinheritStatics[theme.groupKey].LABEL}</b>
        </p>
      )}

      <ReinCardGrid>
        {data.allMarkdownRemark.edges.map(edge => {
          if(!edge.node.frontmatter.target_audience.includes(theme.groupKey))return null;
          return (
          <ReinGridCard
            key={edge.node.fields.typeCountId}
            excerpt={edge.node.excerpt}
            faIcon={faRss}
            targetAudience={edge.node.frontmatter.target_audience}
            title={edge.node.frontmatter.title}
            type="news"
            url={`/content/news/${edge.node.fields.typeCountId}?mode=${theme.mode}`}
            uid={edge.node.fields.typeCountId}
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
          fields {
            typeCountId
          },
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
    fields: {
      typeCountId: string
    }
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
