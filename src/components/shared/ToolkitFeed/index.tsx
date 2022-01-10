import { faRss } from "@fortawesome/free-solid-svg-icons"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Badge, Form } from "react-bootstrap"
import SideMainLayout from "../Layout/SideMainLayout"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"

/**
 *
 * @returns
 */
const ToolkitFeed: React.FC = () => {
  const data: ToolsQueryData.Data = useStaticQuery(ToolsQuery)

  const [tags, setTags] = React.useState([])

  const ALL_TAGS = [
    "REST-API",
    "Library",
    "Web-Interface",
    "GraphQL-API",
    "Application",
    "CLI",
    "Python",
    "Java",
    "X-Technologies",
    "Javascript",
    "Typescript",
    "Web development",
    "Economics",
    "Cultural Heritage",
    "History",
    "Museology",
    "Machine Learning",
    "Topic Modeling",
    "NLP",
    "GIS",
    "Relational DB",
  ]

  const toggleTag = (toToggle: string) => {
    let tagsCopied = [...tags]
    if (tags.includes(toToggle)) {
      let filtered = tagsCopied.filter(curTag => toToggle !== curTag)
      setTags(() => filtered)
    } else {
      tagsCopied.push(toToggle)
      setTags(() => tagsCopied)
    }
  }

  return (
    <SideMainLayout
      side={
        <div className="bg-light p-4">
          {ALL_TAGS.sort().map(curTag => (
            <Form.Check
              type="checkbox"
              checked={tags.includes(curTag)}
              defaultChecked={false}
              key={curTag}
              onClick={() => toggleTag(curTag)}
              label={curTag}
              value={curTag}
            ></Form.Check>
          ))}
        </div>
      }
    >
      <>
        {tags.length !== 0
          ? tags.map(tag => (
              <Badge onClick={() => toggleTag(tag)} className="me-1 secondary">
                {tag}
              </Badge>
            ))
          : <Badge className="me-1 light">
          *
        </Badge>}
        <hr></hr>
        <ReinCardGrid>
          {data.allMarkdownRemark.edges.map(edge => {
            // filter only if no tags were selected
            if (
              tags.length !== 0 &&
              !tags.some(curTag =>
                edge.node.frontmatter.tool_type.includes(curTag)
              )
            ) {
              return
            } else {
              return (
                <ReinGridCard
                  key={edge.node.fields.typeCountId}
                  excerpt={edge.node.excerpt}
                  faIcon={faRss}
                  targetAudience={edge.node.frontmatter.target_audience}
                  title={edge.node.frontmatter.title}
                  type="news"
                  url={`/content/toolkits/${
                    edge.node.fields.typeCountId
                  }?mode=${""}`}
                  uid={edge.node.fields.typeCountId}
                >
                  <span>{edge.node.fields.typeCountId}</span>
                </ReinGridCard>
              )
            }
          })}
        </ReinCardGrid>
      </>
    </SideMainLayout>
  )
}

export default ToolkitFeed

const ToolsQuery = graphql`
  query ToolsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/tools/" }, frontmatter: {} }
    ) {
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
            author
            training_available
            tool_type
            type
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
    author?: any
    training_available: boolean
    tool_type?: any
    type: string
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
