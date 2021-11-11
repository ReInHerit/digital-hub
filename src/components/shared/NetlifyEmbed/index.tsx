import React from "react"

interface Props {
  htmlLoc: string,
  [property: string]: any
}

/**
 * Displays embedded netlify CMS.
 * @param props.htmlLoc // locations of the html file containing the embeded netlify cms.
 * @returns 
 */
const NetlifyEmbed: React.FC<Props> = (props) => {

  return <iframe {...props} src={props.htmlLoc}></iframe>

}


export default NetlifyEmbed;