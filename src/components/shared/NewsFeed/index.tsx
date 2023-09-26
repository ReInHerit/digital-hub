
import { faWatchmanMonitoring } from "@fortawesome/free-brands-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faStamp, faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"
import { Col, Row, Badge, Button } from "react-bootstrap"
 

/**
 * Component reading out data from markdown files at build time using gatsby.
 * @returns
 */
const NewsFeed: React.FC = () => {
  const data: NewsQueryData.Data = useStaticQuery(NEWS_QUERY)

    const [theme, setThemes] = React.useState([]) 
    const ALL_THEMES = ["Tourism", "Management", "Technology", "Other"];
  
    const toggleTheme = (toToggleTheme: string) => {
      let themeSel = []
      if (theme.includes(toToggleTheme)) {
        let filteredTheme = themeSel.filter(curTheme => toToggleTheme !== curTheme)
        setThemes(() => filteredTheme)
      } else {
        themeSel.push(toToggleTheme)
        setThemes(() => themeSel)
      } 
    } 

    const resetPosts = () => {
      setThemes()
    }

  return (
    <>
      <div className="mt-md-5">
      <p className="ms-2"><i>Filter news by main focus.</i></p> 
    {/*  <Button
            variant="dark text-center ps-5 pe-5 m-1"
            bsPrefix="btn"
            onClick={() => resetPosts()}
            >All news</Button>
      */}
      {ALL_THEMES.sort().map(curTheme => (
          <Button
            variant="dark text-center ps-5 pe-5 m-1"
            bsPrefix="btn"
            key={curTheme}
            onClick={() => toggleTheme(curTheme)}
            label={curTheme}
            value={curTheme}
          >{curTheme}</Button>
        ))}

      </div>   
      <br/>

      <ReinCardGrid>
      {data.allMarkdownRemark.edges.map(edge => {
          // filter only if no tags were selected
          if (
            theme.length !== 0 &&
            !theme.some(curTheme => {
              if (!edge.node.frontmatter.theme) return false
              return edge.node.frontmatter.theme.includes(curTheme)
            })
          ) {
            return
          } 
          else { 
            return ( 
         <ReinGridCard
            key={edge.node.frontmatter.pageId}
            body={edge.node.excerpt}
            title={edge.node.frontmatter.title}
            url={`/news/${edge.node.frontmatter.pageId}`}
            uid={edge.node.frontmatter.pageId}
            footerContent={
              <Row>
              <Col>
              <p className="m-0"><FontAwesomeIcon icon={faClock} scale={".5x"}/> - {edge.node.wordCount.words} words</p>
              <p className="m-0"><FontAwesomeIcon icon={faWatchmanMonitoring} scale={".5x"}/> - {edge.node.frontmatter.date}</p>
              {edge.node.frontmatter.mainReference && <p className="m-0"><a style={{color:"#6c757d"}} className="text-decoration-none" target="_blank" href={edge.node.frontmatter.mainReference}><FontAwesomeIcon icon={faLink} scale={".5x"}/> - {edge.node.frontmatter.mainReference}</a></p>}
              </Col>
              <Col>     
              <Badge className={
              [
              edge.node.frontmatter.theme === "Technology" && "badge rounded-pill bg-primary float-end", 
              edge.node.frontmatter.theme === "Management" && "badge rounded-pill bg-warning float-end",
              edge.node.frontmatter.theme === "Tourism" && "badge rounded-pill bg-success float-end",
              edge.node.frontmatter.theme === "Other" && "badge rounded-pill bg-secondary float-end",]
              }
              style={{ fontSize: "1em", fontWeight: "normal", padding: "0.75em"}}>{edge.node.frontmatter.theme}
              </Badge>
              </Col>
            </Row>
          }
        >
          { edge.node.frontmatter.thumbnail && <Thumbnail src={edge.node.frontmatter.thumbnail}></Thumbnail>}
          </ReinGridCard>
           )
          }
        })}
        
      </ReinCardGrid>
    </>
  )
}

export default NewsFeed

const NEWS_QUERY = graphql`
query NewsQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/news/"}, frontmatter: {status: {eq: "completed"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    edges {
      node {
        html
        excerpt
        frontmatter {
          title
          pageId
          date(fromNow: true)
          target_audience
          theme
          layout
          mainReference
          thumbnail
        }
        wordCount {
          words
        }
      }
    }
  }
}
`

declare module NewsQueryData {
  export interface Frontmatter {
    title: string
    date: string
    target_audience: string[]
    pageId: string
    mainReference: string | null
    thumbnail?: string
    theme: string
    status: string
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
