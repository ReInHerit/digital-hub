import { Link } from "gatsby"
import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import DocNav from "../../components/static/DocNav"

const DocAbout = () => {
  return (
    <BaseLayout>
      <h1>Technical documentation</h1>
      <p>Description of the underlying software architecture of the Digital Hub.</p>
      <br />
      <SideBarsLayout
        left={<DocNav/>}
        right={<>Dummy Content</>}
      >
        <h2>About / Overview</h2>
        <p>reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </SideBarsLayout>
    </BaseLayout>
  )
}

export default DocAbout
