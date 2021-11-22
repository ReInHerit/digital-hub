
import React from "react"
import SoftAuthForm from "../components/shared/SoftAuthForm";
import BaseLayout from "../components/static/BaseLayout"
import { useReinLocalStorage } from "../hooks/useReinLocalStorage";



/**
 * Intern area of project - e.g. access to netlify CMS etc.
 * @returns 
 */
const Intern = () => {

  const { retrieveCollection } = useReinLocalStorage("none");


  return <>
    <BaseLayout>
      <h1>Internal area</h1>
      
      <p>Intern area of project - e.g. access to netlify CMS etc. / manuals on how to add images on pinterest etc.</p>
      <br />
      <SoftAuthForm></SoftAuthForm>
      
      <ul>{retrieveCollection().map(item => <li>{item.value}</li>)}</ul>

    </BaseLayout>
  </>
}

export default Intern;
