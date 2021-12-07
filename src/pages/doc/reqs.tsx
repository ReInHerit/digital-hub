import React from "react";
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout";
import BaseLayout from "../../components/static/BaseLayout";
import DocNav from "../../components/static/DocNav";

const Requirements = () => {

  return <BaseLayout>
    <SideBarsLayout
      left={<DocNav/>}
    >
      <h1>Requirements</h1>
      <br />
      <h2>UML Use case diagram</h2>
      <br />
      <img src="/images/diagrams/use_case.JPG" alt="UML use case diagram" style={{maxWidth: "100%"}}></img>
    </SideBarsLayout>
  </BaseLayout>

}

export default Requirements;