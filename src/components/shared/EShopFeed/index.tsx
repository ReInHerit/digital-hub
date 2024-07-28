import { faImage } from "@fortawesome/free-solid-svg-icons"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {  Form } from "react-bootstrap"
import SideMainLayout from "../Layout/SideMainLayout"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import Thumbnail from "../Thumbnail"


/*
 * Generated overview over eshop items
 * @returns
 */
const EShopFeed: React.FC = () => {
const data: EshopQueryData.Data = useStaticQuery(EshopQuery)

const [museum, setMuseums] = React.useState([]) 
const [product_type, setProductType] = React.useState([])

const ALL_MUSEUMS = ["Bank of Cyprus Cultural Foundation", "Graz Museum", "Museum of Cycladic Art"]
const ALL_PRODUCT_TYPES = ["Keyring", "Cards", "Memory cards", "Weekly planner", "Greeting cards", "Puzzle", "Activity book", "Snakes and ladders", "Colouring book", "3D objects"]

const toggleMUSE = (toToggleMUSE: string) => {
  let museumsSel = [...museum]
  if (museum.includes(toToggleMUSE)) {
    let filteredMUSE = museumsSel.filter(curMUSE => toToggleMUSE !== curMUSE)
    setMuseums(() => filteredMUSE)
  } else {
    museumsSel.push(toToggleMUSE)
    setMuseums(() => museumsSel)
  }
}

const togglePRODUCT = (toTogglePRODUCT: string) => {
  let productSel = [...product_type]
  if (product_type.includes(toTogglePRODUCT)) {
    let filteredPRODUCT = productSel.filter(curPRODUCT => toTogglePRODUCT !== curPRODUCT)
    setProductType(() => filteredPRODUCT)
  } else {
    productSel.push(toTogglePRODUCT)
    setProductType(() => productSel)
  }
}


return (
  <SideMainLayout
    side={
      <div className="bg-white card p-4 mb-2 border-0 shadow">
        <p><b>Museum</b></p>
        {ALL_MUSEUMS.sort().map(curMUSE => (
          <Form.Check
            type="checkbox"
            checked={museum.includes(curMUSE)}
            defaultChecked={false}
            key={curMUSE}
            onClick={() => toggleMUSE(curMUSE)}
            label={curMUSE}
            value={curMUSE}
          ></Form.Check>
        ))}
        <br></br>
        <p><b>Product</b></p>
        {ALL_PRODUCT_TYPES.sort().map(curPRODUCT => (
          <Form.Check
            type="checkbox"
            checked={product_type.includes(curPRODUCT)}
            defaultChecked={false}
            key={curPRODUCT}
            onClick={() => togglePRODUCT(curPRODUCT)}
            label={curPRODUCT}
            value={curPRODUCT}
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
            museum.length !== 0 &&
            !museum.some(curMUSE => {
              if (!edge.node.frontmatter.museum) return false
              return edge.node.frontmatter.museum.includes(curMUSE)
            })
          ) {
            return
          } 
          else if (
              product_type.length !== 0 &&
              !product_type.some(curPRODUCT => {
                if (!edge.node.frontmatter.product_type) return false
                return edge.node.frontmatter.product_type.includes(curPRODUCT)
              })
            ) {
              return
            } 
          else {
            return (
              <ReinGridCard
              body={edge.node.excerpt}
              title={edge.node.frontmatter.title}
              url={`/eshop/${edge.node.frontmatter.pageId}`}
              uid={edge.node.frontmatter.pageId}
            >
            { edge.node.frontmatter.thumbnail && <Thumbnail src={edge.node.frontmatter.thumbnail}></Thumbnail>}
            </ReinGridCard>
           )
          }
        })}
      </ReinCardGrid>
    </>
  </SideMainLayout>
)
}

export default EShopFeed
const EshopQuery = graphql`
 
query EshopQuery {
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/(/eshop/)/" }, frontmatter: {}}
  ) {
    edges {
      node {
        excerpt
        frontmatter {
          pageId
          title
          thumbnail
          museum
          product_type
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
    museum: string
    product_type: string
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

