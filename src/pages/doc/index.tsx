import { Link } from "gatsby";
import React from "react";
import BaseLayout from "../../components/static/BaseLayout";

const DocAbout = () => {

  return <BaseLayout>
    <h1>Documentation about</h1>
    <Link to="/doc">About</Link>
      <br />
      <Link to="/doc/architecture">Architecture</Link>
      <br />
      <Link to="/doc/datamodel">Datamodel</Link>
      <br />
      <Link to="/doc/reqs">Requirements</Link>
      <br />
      <Link to="/doc/workflows">Workflows</Link>
  </BaseLayout>

}

export default DocAbout;