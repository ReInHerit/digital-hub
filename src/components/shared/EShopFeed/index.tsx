import { faImage } from "@fortawesome/free-solid-svg-icons"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Badge, Form } from "react-bootstrap"
import SideMainLayout from "../Layout/SideMainLayout"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"

/**
 * Generated overview over eshop items
 * @returns
 */
const EShopFeed: React.FC = () => {
  const data: EshopQueryData.Data = useStaticQuery(EshopQuery)

  const [tags, setTags] = React.useState([])

  const MUSEUMS = [
    "Bank of Cyprus Cultural Foundation",
    "Graz Museum",
    "Museum of Cycladic Art"
  ]

  const PRODUCT_TYPE = [
    "Keyring", "Cards", "Memory cards", "Weekly planner", "Greeting cards", "Puzzle", "Activity book", "Snakes and ladders", "Colouring book"
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
        <div className="bg-white card p-3 mb-2 border-0 shadow">
          {tags.length !== 0
          ? tags.map(tag => (
              <Badge onClick={() => toggleTag(tag)} bg="white" color="black" text={"black" as "white"} className="me-1 btn border">
                {tag}
              </Badge>
            ))
          : <Badge className="me-1 btn border" bg="white" color="black" text={"black" as "white"}>
          your selection
        </Badge>}
        <br></br>
          <p><b>Museum</b></p>
          {MUSEUMS.sort().map(curTag => (
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
          <br></br>
          <p><b>Product</b></p>
          {PRODUCT_TYPE.sort().map(curTag => (
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
      <></>
    <ReinCardGrid>
      {data.allMarkdownRemark.edges.map(edge => (
        <ReinGridCard
          body={edge.node.excerpt}
          title={edge.node.frontmatter.title}
          url={`/eshop/${edge.node.frontmatter.pageId}`}
          uid={edge.node.frontmatter.pageId}
        >
          <img style={{maxWidth:200}} src={edge.node.frontmatter.thumbnail}></img>
        </ReinGridCard>
      ))}
    </ReinCardGrid>
    <></>
    </SideMainLayout>
  )
}

export default EShopFeed

const EshopQuery = graphql`
  query EshopQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/eshop/" }, frontmatter: {} }
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

declare module EshopQueryData {
  export interface Frontmatter {
    title: string
    thumbnail: string
    pageId: string
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
