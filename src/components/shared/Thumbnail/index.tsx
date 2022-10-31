import React from "react";

interface props {
  src: string
}

/**
 * Handles display of image as thumbnail
 */
const Thumbnail: React.FC<props> = (props) => {
  return <img src={props.src} className="Thumbnail"></img>
}

export default Thumbnail;