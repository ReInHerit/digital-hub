import { faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Button } from "react-bootstrap"
import ReinCardGrid from "../../shared/ReinCardGrid"
import ReinGridCard from "../../shared/ReinCardGrid/ReinGridCard"
import ReinCard from "../../shared/ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"

const ExhibitionCollection: React.FC = () => {
  const data: ExhibitionCollectionQuery.Data = useStaticQuery(
    EXHIBITION_COLLECTION_QUERY
  )

  return (
    <>
      <div className="bg-white p-3 rounded border shadow">
        <p className="mb-md-5">
          The ReInHerit proposed model will be based on the development of a
          digital cultural heritage ecosystem, where all the key stakeholders
          (museums, heritage sites, policy makers, professionals and
          communities) will have an open and collaborative space to experiment,
          share and innovate. This will be achieved through the creation of an
          innovative Digital Hub. Tools and resources (on training, tourism,
          conservation, preservation, knowledge creation, content use reuse,
          illicit trafficking of goods) necessary for sustainable management
          will be shared through the digital platform that will host the
          ecosystem. This ecosystem will also be the experiential open-ended
          space that will support and generate entrepreneurial initiatives,
          knowledge produced through co-creation, curation of digital content
          and visitor experiences. The proposed work plan includes a variety of
          key activities that will enable the collaboration of museums and
          cultural heritage sites, real-time.
        </p>
      </div>
      <div className="mt-md-2">
        <Button variant="dark" className="m-1 ps-5 pe-5">
          Topic
        </Button>
        <Button variant="dark" className="m-1 ps-5 pe-5">
          Place
        </Button>
        <Button variant="dark" className="m-1 ps-5 pe-5">
          Period
        </Button>
      </div>
      
      <br/>
      <ReinCardGrid>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <ReinGridCard
              key={edge.node.frontmatter.pageId}
              body={edge.node.excerpt}
              title={edge.node.frontmatter.title}
              url={`/exhibitions/${edge.node.frontmatter.pageId}`}
              uid={edge.node.frontmatter.pageId}
              // footerContent={
              //   <div>
              //     <p className="m-0"><FontAwesomeIcon icon={faClock} scale={".5x"}/> - {edge.node.wordCount.words} words</p>
              //     <p className="m-0"><FontAwesomeIcon icon={faWatchmanMonitoring} scale={".5x"}/> - {edge.node.frontmatter.date}</p>
              //     {edge.node.frontmatter.mainReference && <p className="m-0"><a style={{color:"#6c757d"}} className="text-decoration-none" target="_blank" href={edge.node.frontmatter.mainReference}><FontAwesomeIcon icon={faLink} scale={".5x"}/> - {edge.node.frontmatter.mainReference}</a></p>}
              //   </div>
              // }
            >
              {edge.node.frontmatter.thumbnail && (
                <Thumbnail src={edge.node.frontmatter.thumbnail}></Thumbnail>
              )}
            </ReinGridCard>
          )
        })}
      </ReinCardGrid>
    </>
  )
}

export default ExhibitionCollection

const EXHIBITION_COLLECTION_QUERY = graphql`
  query ExhibitionCollectionQuery {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/exhibitionCollection/" }
        frontmatter: {}
      }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            pageId
            title
            thumbnail
          }
        }
      }
    }
  }
`

declare module ExhibitionCollectionQuery {
  export interface Frontmatter {
    pageId: string
    title: string
    thumbnail: string
  }

  export interface Node {
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
