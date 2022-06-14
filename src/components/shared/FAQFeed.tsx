import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Accordion } from "react-bootstrap"

/**
 * Renders overview over FAQ collection.
 * @returns
 */
const FAQFeed: React.FC = () => {
  const faqData: FAQGraphqlResponse.Data = useStaticQuery(FAQQuery)

  return (
    <Accordion>
      {faqData.allMarkdownRemark.edges.sort().map(edge => (
        <Accordion.Item eventKey={edge.node.frontmatter.pageId}>
          <Accordion.Header>{edge.node.frontmatter.question}</Accordion.Header>
          <Accordion.Body>{edge.node.frontmatter.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
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
    allMarkdownRemark(
      filter: { frontmatter: {}, fileAbsolutePath: { regex: "/faq/" } }
      sort: { fields: frontmatter___question }
    ) {
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
