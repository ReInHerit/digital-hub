import { Link } from "gatsby";
import React from "react";
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout";
import BaseLayout from "../../components/static/BaseLayout";
import DocNav from "../../components/static/DocNav";

const Requirements = () => {

  return <BaseLayout>
    <h1>Technical documentation</h1>
      <p>Description of the underlying software architecture of the Digital Hub.</p>
      <br />
    <SideBarsLayout
      left={<DocNav/>}
    >
      <h2>Requirement Analysis</h2>
      <br />
      <a href="/images/diagrams/use_case.JPG" target="_blank"><img src="/images/diagrams/use_case.JPG" alt="UML use case diagram" style={{maxWidth: "100%"}}></img></a>
    </SideBarsLayout>
  </BaseLayout>

}

export default Requirements;