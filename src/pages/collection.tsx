import React from "react";
import BaseLayout from "../components/static/BaseLayout";
import { useReinLocalStorage } from "../hooks/useReinLocalStorage";


const CollectionPage = () => {

  const { collectionState, toggleItem } = useReinLocalStorage("none");

  return <BaseLayout>
    <h2>Your Collection</h2>
    <ul>{collectionState.map(item => <li onClick={() => toggleItem(item)}>{item.value}</li>)}</ul>
  
  </BaseLayout>

}


export default CollectionPage;