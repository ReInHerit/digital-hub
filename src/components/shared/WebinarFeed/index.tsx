import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import SideMainLayout from "../Layout/SideMainLayout"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"

const TrainingFeed: React.FC = () => {
  const data: TrainingModel.Data = useStaticQuery(TRAINING_QUERY)

  return (
    <>
      <SideMainLayout
        side={
          <>
            <div>
              <b className="text-secondary">Summary</b>
            </div>
            <p>
              Here you'll find a small overview ... oids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter ...
            </p>
            <div>
              <b className="text-secondary">Content</b>
            </div>
            <ul className="m-0 p-1 pt-0" style={{ listStyle: "none" }}>
              {data.allMarkdownRemark.edges.map(edge => (
                <li className="p-0 m-0">
                  <small>
                    <Link
                      to={`/webinars/${edge.node.frontmatter.pageId}`}
                      className="text-dark"
                    >
                      {edge.node.frontmatter.title}
                    </Link>{" "}
                    <span className="text-muted">
                      ({edge.node.frontmatter.date})
                    </span>
                  </small>
                </li>
              ))}
            </ul>
          </>
        }
      >
        <ReinCardGrid>
          {data.allMarkdownRemark.edges.map((training, i) => (
            <ReinGridCard
              key={training.node.frontmatter.pageId}
              url={`/webinars/${training.node.frontmatter.pageId}`}
              title={training.node.frontmatter.title}
              body={training.node.excerpt}
              uid={training.node.frontmatter.pageId}
            ></ReinGridCard>
          ))}
        </ReinCardGrid>
      </SideMainLayout>
    </>
  )
}

export default TrainingFeed

const TRAINING_QUERY = graphql`
  query TrainingQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/webinars/" } }) {
      edges {
        node {
          html
          excerpt
          frontmatter {
            pageId
            title
            date(fromNow: true)
            target_audience
          }
        }
      }
    }
  }
`

declare module TrainingModel {
  export interface Frontmatter {
    title: string
    date: string
    target_audience: string[]
    pageId: string
  }

  export interface Node {
    html: string
    excerpt: string
    frontmatter: Frontmatter,
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
