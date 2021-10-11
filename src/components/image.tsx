import React from "react"
import { StaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"

// Note: You can change "images" to whatever you'd like.

const Image = (props: { filename: string, alt: any, style?: any }) => {
  
  if(props.filename.includes("/")){
    throw new TypeError("You have to only specify the filename as prop for the Image component. It will auto-route to /images/FILENAME");
  }
  
  return <img src={"/images/" + props.filename} style={props.style}></img>
}

export default Image


