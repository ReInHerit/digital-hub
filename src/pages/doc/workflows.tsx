import React from "react";
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout";
import BaseLayout from "../../components/static/BaseLayout";
import DocNav from "../../components/static/DocNav";


const Contribute = () => {

  return <BaseLayout>
    <SideBarsLayout
      left={<DocNav/>}
    >
      <h1>Contribute to ReInherit</h1>
    </SideBarsLayout>
    
  </BaseLayout>

}

export default Contribute;