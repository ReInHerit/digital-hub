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
      <h2>UML Use case diagram</h2>
    </SideBarsLayout>
  </BaseLayout>

}

export default Requirements;