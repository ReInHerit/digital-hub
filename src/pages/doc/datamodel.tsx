
import React from "react";
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout";
import BaseLayout from "../../components/static/BaseLayout";
import DocNav from "../../components/static/DocNav";

const DataModel = () => {

  return <BaseLayout>
    <h1>Documentation</h1>
      <p>Description of the underlying software architecture of the Digital Hub.</p>
      <br />
    <SideBarsLayout
      left={<DocNav/>}
    >
      <h2>Data model of ReinHerit</h2>
      <h2>ER Diagram?</h2>
    </SideBarsLayout>
    
  </BaseLayout>

}


export default DataModel;