import React from "react"
import CMS from 'netlify-cms-app'


const Admin = () => {

  // Initialize the CMS object
  CMS.init();
  // Now the registry is available via the CMS object.
  // CMS.registerPreviewTemplate('my-template', MyTemplate)


  return <> 
    {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> */}
    {/* <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script> */}
    
  </>
}

export default Admin;
