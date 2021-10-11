import React from "react"
import NetlifyCMSAdmin from "../components/shared/NetlifyCMSAdmin";
//import CMS from 'netlify-cms-app'


const Admin = () => {

  // Check if window is defined (so if in the browser or in node.js).
  const isBrowser = typeof window !== "undefined"
  // run CMS.init() only in browser
  //if(isBrowser){
    // Initialize the CMS object
    //CMS.init();
    // Now the registry is available via the CMS object.
    // CMS.registerPreviewTemplate('my-template', MyTemplate)
  //}

  


  return <>
    <NetlifyCMSAdmin/> 
    {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> */}
    {/* <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script> */}
  </>
}

export default Admin;
