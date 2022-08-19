import React from "react";

/**
 * Component handles embeding of pageflow.io storymaps.
 * 
 * @returns 
 */
const PageFlowEmbed: React.FC = () => {

  return <iframe src="https://example.pageflow.io/storylines/embed" height={1000} width={1000} allowFullScreen></iframe>


}


export default PageFlowEmbed;