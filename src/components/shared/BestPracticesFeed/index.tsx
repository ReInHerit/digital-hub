import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"
import { Col, Row, Badge, Button } from "react-bootstrap"

/**
 * Generated overview over BestPractices items
 * @returns
 */
const BestPracticesFeed: React.FC = () => {
const data: BestPracticesQueryData.Data = useStaticQuery(BestPracticesQuery)

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
      <p className="ms-2"><i>Filter best practices by main focus.</i></p> 
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
            url={`/bestpractices/${edge.node.frontmatter.pageId}`}
            uid={edge.node.frontmatter.pageId}
            footerContent={
              <Row>
              <Badge className={
              [
                edge.node.frontmatter.theme === "Technology" && "badge rounded-pill bg-primary float-end", 
                edge.node.frontmatter.theme === "Management" && "badge rounded-pill bg-warning float-end",
                edge.node.frontmatter.theme === "Tourism" && "badge rounded-pill bg-success float-end",
                edge.node.frontmatter.theme === "Other" && "badge rounded-pill bg-secondary float-end",
              ]
              }
              style={{ fontSize: "1em", fontWeight: "normal", padding: "0.75em"}}>{edge.node.frontmatter.theme}
              </Badge>
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

export default BestPracticesFeed

const BestPracticesQuery = graphql`
query BestPracticesQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/bestpractices/"}, frontmatter: {pubstatus: {eq: "completed"}}}
    sort: {fields: frontmatter___date, order: ASC}
    ) {
    edges {
      node {
        html
        excerpt
        frontmatter {
          title
          pubstatus
          date(fromNow: true)
          target_audience
          pageId
          license
          thumbnail
          abstract
          challengesbestpractice
          desc
          emailbestpractice
          formtypbestpractice
          infosbestpractice
          keywordsbestpractice
          locationbestpractice
          orgbestpractice
          partnerbestpractice
          personsbestpractice
          resourcesbestpractice
          successbestpractice
          timebestpractice
          transferbestpractice
          urlsbestpractice
          theme
          type
        }
      }
    }
  }
}
`

declare module BestPracticesQueryData {
  export interface Frontmatter {
    title: string
    date: string
    target_audience: string[]
    pageId: string
    mainReference: string | null
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