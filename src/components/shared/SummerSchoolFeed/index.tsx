import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import SideMainLayout from "../Layout/SideMainLayout"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"
import { Row, Badge} from "react-bootstrap"

const SummerSchoolFeed: React.FC = () => {
  const data: SummerSchoolModel.Data = useStaticQuery(SUMMERSCHOOL_QUERY)

  return (
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map((SummerSchool, i) => (
        <ReinGridCard
          key={SummerSchool.node.frontmatter.pageId}
          url={`/summerschool/${SummerSchool.node.frontmatter.pageId}`}
          title={SummerSchool.node.frontmatter.title}
          body={SummerSchool.node.excerpt}
          uid={SummerSchool.node.frontmatter.pageId}
          footerContent={
            <Row>
            <Badge className={
            [
                SummerSchool.node.frontmatter.theme === "Technology" && "badge rounded-pill bg-primary float-end", 
                SummerSchool.node.frontmatter.theme === "Management" && "badge rounded-pill bg-warning float-end",
                SummerSchool.node.frontmatter.theme === "Tourism" && "badge rounded-pill bg-success float-end",
                SummerSchool.node.frontmatter.theme === "Other" && "badge rounded-pill bg-secondary float-end",
            ]
            }
            style={{ fontSize: "1em", fontWeight: "normal", padding: "0.75em"}}>{SummerSchool.node.frontmatter.theme}
            </Badge>
          </Row>
        }


        >
          {SummerSchool.node.frontmatter.thumbnail && <Thumbnail src={SummerSchool.node.frontmatter.thumbnail}></Thumbnail>}
        </ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default SummerSchoolFeed

const SUMMERSCHOOL_QUERY = graphql`
  query SummerSchoolQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/summerschool/" } }
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

declare module SummerSchoolModel {
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
