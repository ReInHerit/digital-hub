import React from "react"
import BaseLayout from "../components/static/BaseLayout"


/**
 * Intern area of project - e.g. access to netlify CMS etc.
 * @returns 
 */
const Intern = () => {



  return <>
    <BaseLayout>
      <h1>Internal area</h1>
      <p>Intern area of project - e.g. access to netlify CMS etc. / manuals on how to add images on pinterest etc.</p>
      <br />
      <a href="/admin/admin.html" target="_blank">Link to Netlify CMS</a>
    </BaseLayout>
  </>
}

export default Intern;
