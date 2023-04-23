import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faLink, faStamp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Badge, Form } from "react-bootstrap"
import { ReinUtils } from "../../../utils/ReinUtil"
import SideMainLayout from "../Layout/SideMainLayout"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"

/**
 * Overview over all available toolkit components
 * @returns
 */
const ToolkitComponentsFeed: React.FC = () => {
  const data: ToolsQueryData.Data = useStaticQuery(ToolsQuery)

  const [tags, setTags] = React.useState([])

  const ALL_TAGS = [
    "Tag A",
    "Tag B",
    "Tag C"
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
        <ReinCardGrid>
          {data.allMarkdownRemark.edges.map(edge => {
            // filter only if no tags were selected
            if (
              tags.length !== 0 &&
              !tags.some(curTag => {
                if (!edge.node.frontmatter.tool_type) return false
                return edge.node.frontmatter.tool_type.includes(curTag)
              })
            ) {
              return
            } else {
              return (
                <ReinGridCard
                  key={edge.node.frontmatter.pageId}
                  body={edge.node.excerpt}
                  title={edge.node.frontmatter.title}
                  url={`/tools/components/${edge.node.frontmatter.pageId}`}
                  uid={edge.node.frontmatter.pageId}
                  footerContent={
                    <div>
                      <p className="m-0"><FontAwesomeIcon icon={faClock} scale={".5x"}/> - {edge.node.wordCount.words} words</p>
                      <p className="m-0"><FontAwesomeIcon icon={faStamp} scale={".5x"}/> - {edge.node.frontmatter.license}</p>
                      {edge.node.frontmatter.mainReference && <p className="m-0"><a style={{color:"#6c757d"}} className="text-decoration-none" target="_blank" href={edge.node.frontmatter.mainReference}><FontAwesomeIcon icon={faLink} scale={".5x"}/> - {edge.node.frontmatter.mainReference}</a></p>}
                    </div>
                  }
                >
                  {edge.node.frontmatter.thumbnail && <Thumbnail src={edge.node.frontmatter.thumbnail}></Thumbnail>}
                </ReinGridCard>
              )
            }
          })}
        </ReinCardGrid>
      )
}

export default ToolkitComponentsFeed

const ToolsQuery = graphql`
  query ToolComponentsQuery {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/toolcomponents/" }
        frontmatter: {}
      }
    ) {
      edges {
        node {
          html
          excerpt
          frontmatter {
            title
            date(fromNow: true)
            target_audience
            layout
            type
            pageId
            license
            mainReference
            thumbnail
            tags
          }
          wordCount {
            words
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
    pageId: string
    license: string
    mainReference: string | null
    thumbnail?: string
    tags?: string[]
  }

  export interface Node {
    html: string
    excerpt: string
    frontmatter: Frontmatter
    wordCount: {
      words: number
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
