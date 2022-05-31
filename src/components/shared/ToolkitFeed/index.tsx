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
        <div className="border border-dark p-4">
          <b style={{color:"#2eacc8"}}>Filter categories</b>
          <br/>
          {tags.length !== 0
          ? tags.map(tag => (
              <Badge onClick={() => toggleTag(tag)} bg="white" color="black" text={"black" as "white"} className="me-1 btn border">
                {tag}
              </Badge>
            ))
          : <Badge className="me-1 btn border" bg="white" color="black" text={"black" as "white"}>
          *
        </Badge>}
        <br></br>
        <br></br>
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
        <ReinCardGrid>
          {data.allMarkdownRemark.edges.map(edge => {
            // filter only if no tags were selected
            if (
              tags.length !== 0 &&
              !tags.some(curTag =>
                {
                  if(!edge.node.frontmatter.tool_type)return false;
                  return edge.node.frontmatter.tool_type.includes(curTag)
                }
              )
            ) {
              return
            } else {
              return (
                <ReinGridCard
                  key={edge.node.id}
                  body={edge.node.excerpt}
                  title={edge.node.frontmatter.title}
                  url={`/tools/${
                    edge.node.id
                  }?mode=${""}`}
                  uid={edge.node.id}
                ></ReinGridCard>
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
