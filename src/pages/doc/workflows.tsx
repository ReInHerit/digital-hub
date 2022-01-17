import React from "react";
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout";
import BaseLayout from "../../components/static/BaseLayout";
import DocNav from "../../components/static/DocNav";


const Contribute = () => {

  return <BaseLayout>
    <h2>Technical documentation</h2>
      <p>Description of the underlying software architecture of the Digital Hub.</p>
      <br />
    <SideBarsLayout
      left={<DocNav/>}
    >
      <h2>Contribute to ReInherit</h2>
    </SideBarsLayout>
    
  </BaseLayout>

}

export default Contribute;