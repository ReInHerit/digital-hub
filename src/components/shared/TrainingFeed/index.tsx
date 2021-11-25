import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { useReinSoftAuth } from "../../../hooks/contexts/useReinSoftAuth"
import { useReinLocalStorage } from "../../../hooks/useReinLocalStorage"
import { useReinModeTheme } from "../../../hooks/useReinModeTheme"
import SideMainLayout from "../Layout/SideMainLayout"
import NetlifyEmbed from "../NetlifyEmbed"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"

const TrainingFeed: React.FC = () => {
  const data: TrainingModel.Data = useStaticQuery(TRAINING_QUERY)
  const auth = useReinSoftAuth()
  const ReinStorage = useReinLocalStorage<boolean>()
  const { modeVal } = useReinModeTheme()

  return (
    <>
      {auth.signedIn && (
        <>
          <a href="/admin/admin.html#/collections/training" target="_blank">
            Add Training material here
          </a>
          <NetlifyEmbed
            htmlLoc="/admin/admin.html#/collections/training/"
            style={{
              width: "100%",
              height: "100vh",
              border: "2px solid lightgrey",
            }}
          />
        </>
      )}

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
                      to={`/content/training/${edge.node.id}`}
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
              url={`/content/training/${training.node.id}?mode=${modeVal}`}
              title={training.node.frontmatter.title}
              excerpt={training.node.excerpt}
              faIcon={faLeanpub}
              targetAudience={training.node.frontmatter.target_audience}
              type="training"
              uid={training.node.id}
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
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/training/" } }) {
      edges {
        node {
          html
          id
          excerpt
          frontmatter {
            title
            date(fromNow: true)
            target_audience
            training_type
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
    training_type: string[]
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
