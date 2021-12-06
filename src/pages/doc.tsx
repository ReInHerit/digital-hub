import { Link } from "gatsby"
import React from "react"
import BaseLayout from "../components/static/BaseLayout"

const Documentation = () => {
  return (
    <BaseLayout>
      <h1>Documentation</h1>
      <Link to="/doc/about">About</Link>
      <br />
      <Link to="/doc/about">Architecture</Link>
      <br />
      <Link to="/doc/about">Datamodel</Link>
      <br />
      <Link to="/doc/about">Requirements</Link>
      <br />
      <Link to="/doc/about">Workflows</Link>
    </BaseLayout>
  )
}

export default Documentation
