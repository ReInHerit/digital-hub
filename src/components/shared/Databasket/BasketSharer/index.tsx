import { graphql, navigate, useStaticQuery } from "gatsby";
import React from "react";
import { ReinUtils } from "../../../../utils/ReinUtil";

interface Props {
  import: any
}

const BasketSharer: React.FC<Props> = (props) => {

  const data: BasketGraphql.Data = useStaticQuery(BASKET_ALL_QUERY)

  React.useEffect(() => {
    if(ReinUtils.checkSSR())return;

    let curUrl = new URL(window.location.href);
    let basketParamVal = curUrl.searchParams.get("basket")

    if(!basketParamVal)return;
    let wantsImport = confirm("Datected values: do you want to import?");
    if(!wantsImport)return;

    // needs to be decoded
    let parsedVals = decodeURIComponent(basketParamVal).split(",");

    console.log(parsedVals, data);


    let toImport = data.allMarkdownRemark.edges.filter(edge => parsedVals.includes(edge.node.fields.typeCountId.toString()))

    let refactored = toImport.map(edge => {
      return {
          id: edge.node.fields.typeCountId,
          title: edge.node.frontmatter.title,
          type: edge.node.frontmatter.type
      }
    })

    props.import(refactored);

    // would also need to write to local storage
    

    // reset query param + remove from history?
    //curUrl.searchParams.set("basket", "");
    curUrl.searchParams.delete("basket");
    navigate(curUrl.toString());
    //window.location.href = curUrl.toString();


  }, [])

  return null;

}


export default BasketSharer;


const BASKET_ALL_QUERY = graphql`
  query BasketAllQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            target_audience
            layout
            type
          }
          fields {
            typeCountId
          }
        }
      }
    }
  }

`


declare module BasketGraphql {

  export interface Frontmatter {
      title: string;
      date: Date;
      target_audience: string[];
      layout: string;
      type: string;
  }

  export interface Node {
      id: string;
      fields: {
        typeCountId: number
      }
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

