import { graphql, useStaticQuery } from "gatsby"
import React from "react"

/**
 * Renders overview over FAQ collection.
 * @returns
 */
const FAQFeed: React.FC = () => {
  const faqData: FAQGraphqlResponse.Data = useStaticQuery(FAQQuery)

  return (
    <ul>
      {faqData.allMarkdownRemark.edges.map(edge => (
        <li>{edge.node.frontmatter.question}</li>
      ))}
    </ul>
  )
}

export default FAQFeed

declare module FAQGraphqlResponse {
  export interface Frontmatter {
    question: string
    answer: string
    target_audience: string[]
    pageId: string
  }

  export interface Node {
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

const FAQQuery = graphql`
  query FAQQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "faq" } } }) {
      edges {
        node {
          frontmatter {
            question
            answer
            target_audience
            pageId
          }
        }
      }
    }
  }
`
