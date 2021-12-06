
import React from "react";
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout";
import BaseLayout from "../../components/static/BaseLayout";
import DocNav from "../../components/static/DocNav";

const DataModel = () => {

  return <BaseLayout>
    <SideBarsLayout
      left={<DocNav/>}
    >
      <h1>Data model of ReinHerit</h1>
      <h2>ER Diagram?</h2>
    </SideBarsLayout>
    
  </BaseLayout>

}


export default DataModel;