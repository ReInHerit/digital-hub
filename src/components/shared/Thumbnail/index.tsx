import React from "react";

interface props {
  src: string
}

/**
 * Handles display of image as thumbnail
 */
const Thumbnail: React.FC<props> = (props) => {
  return <img src={props.src} style={{maxWidth:100, maxHeight:100}}></img>
}

export default Thumbnail;