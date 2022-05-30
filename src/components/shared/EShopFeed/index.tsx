import { faImage } from "@fortawesome/free-solid-svg-icons";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ReinCardGrid from "../ReinCardGrid";
import ReinGridCard from "../ReinCardGrid/ReinGridCard";


/**
 * Generated overview over eshop items
 * @returns 
 */
const EShopFeed: React.FC = () => {

  const data: EshopQueryData.Data = useStaticQuery(EshopQuery);



  return <ReinCardGrid>
    {data.allMarkdownRemark.edges.map(edge => <ReinGridCard
    
      excerpt={edge.node.excerpt}
      faIcon={faImage}
      targetAudience={["VISITOR"]}
      title={edge.node.frontmatter.title}
      type="eshop"
      url={`/eshop/${edge.node.id}`}
      uid={edge.node.id}
    
    />)}
  </ReinCardGrid>
}


export default EShopFeed;



const EshopQuery = graphql`
  query EshopQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/eshop/"}, frontmatter: {}}
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
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
      title: string;
      thumbnail: string;
  }

  export interface Node {
      id: string;
      excerpt: string;
      frontmatter: Frontmatter;
  }

  export interface Edge {
      node: Node;
  }

  export interface AllMarkdownRemark {
      edges: Edge[];
  }

  export interface Data {
      allMarkdownRemark: AllMarkdownRemark;
  }

  export interface Extensions {
  }

  export interface RootObject {
      data: Data;
      extensions: Extensions;
  }

}

