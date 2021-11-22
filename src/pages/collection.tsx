import React from "react";
import BaseLayout from "../components/static/BaseLayout";
import { useReinLocalStorage } from "../hooks/useReinLocalStorage";


const CollectionPage = () => {

  const { retrieveCollection, toggleItem } = useReinLocalStorage("none");

  return <BaseLayout>
    <h2>Your Collection</h2>
    <ul>{retrieveCollection().map(item => <li onClick={() => toggleItem(item)}>{item.value}</li>)}</ul>
  
  </BaseLayout>

}


export default CollectionPage;