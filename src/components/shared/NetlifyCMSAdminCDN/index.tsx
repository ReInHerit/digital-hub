
import React from "react";
import NetlifyCMSAuth from "./NetlifyCMSAuth";

/**
 * Component adds NetlifyCMSAdmin portal when rendered. 
 * @returns 
 */
const NetlifyCMSAdmin = () => {
  return <>
  <NetlifyCMSAuth/>
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script></>
}

export default NetlifyCMSAdmin;
