import { Link } from "gatsby"
import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"

const DocAbout = () => {
  return (
    <BaseLayout>
      <SideBarsLayout
        left={
          <>
            <Link to="/doc">About</Link>
            <br />
            <Link to="/doc/architecture">Architecture</Link>
            <br />
            <Link to="/doc/datamodel">Datamodel</Link>
            <br />
            <Link to="/doc/reqs">Requirements</Link>
            <br />
            <Link to="/doc/workflows">Workflows</Link>
          </>
        }
        right={<>Dummy Content</>}
      >
        <h1>Documentation about</h1>
      </SideBarsLayout>
    </BaseLayout>
  )
}

export default DocAbout
