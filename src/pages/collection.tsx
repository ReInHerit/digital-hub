import React from "react";
import Databasket from "../components/shared/Databasket";
import BaseLayout from "../components/static/BaseLayout";

const CollectionPage = () => {
  
  return <BaseLayout>
    <h2>Your collection</h2>
    <br />
    <Databasket></Databasket>
  
  </BaseLayout>

}


export default CollectionPage;