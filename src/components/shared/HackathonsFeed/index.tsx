import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import SideMainLayout from "../Layout/SideMainLayout"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"
import { Row, Badge} from "react-bootstrap"

const HackathonsFeed: React.FC = () => {
  const data: HackathonsModel.Data = useStaticQuery(SUMMERSCHOOL_QUERY)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map((Hackathons, i) => (
        <ReinGridCard
          key={Hackathons.node.frontmatter.pageId}
          url={`/hackathons/${Hackathons.node.frontmatter.pageId}`}
          title={Hackathons.node.frontmatter.title}
          body={Hackathons.node.excerpt}
          uid={Hackathons.node.frontmatter.pageId}
          footerContent={
            <Row>
            <Badge className={
            [
                Hackathons.node.frontmatter.theme === "Technology" && "badge rounded-pill bg-primary float-end", 
                Hackathons.node.frontmatter.theme === "Management" && "badge rounded-pill bg-warning float-end",
                Hackathons.node.frontmatter.theme === "Tourism" && "badge rounded-pill bg-success float-end",
                Hackathons.node.frontmatter.theme === "Other" && "badge rounded-pill bg-secondary float-end",
            ]
            }
            style={{ fontSize: "1em", fontWeight: "normal", padding: "0.75em"}}>{Hackathons.node.frontmatter.theme}
            </Badge>
          </Row>
        }


        >
          {Hackathons.node.frontmatter.thumbnail && <Thumbnail src={Hackathons.node.frontmatter.thumbnail}></Thumbnail>}
        </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default HackathonsFeed

const HACKATHONS_QUERY = graphql`
  query HackathonsQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hackathons/" } }
    sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          html
          excerpt
          frontmatter {
            pageId
            title
            theme
            date(fromNow: true)
            target_audience
            thumbnail
          }
        }
      }
    }
  }
`

declare module HackathonsModel {
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
