import React from "react";
import BaseLayout from "../components/static/BaseLayout";
import { useReinLocalStorage } from "../hooks/useReinLocalStorage";
import { ReinUtils } from "../utils/ReinUtil";


const CollectionPage = () => {

  const {retrieveCollection, toggleItem} = useReinLocalStorage();


  const [collection, setCollection] = React.useState([]);


  /**
   * Reads out local storage and sets state accordingly on startup.
   */
  React.useEffect(() => {
    if(ReinUtils.checkSSR())return;
    setCollection(retrieveCollection());
  }, [])


  /**
   * Handles toggling of local storage and synchronizes it with the local state.
   * @param obj 
   */
  const handleToggle = (obj) => {
    const newArr = toggleItem(obj);
    setCollection(newArr);
  }


  return <BaseLayout>
    <h2>Your Collection</h2>
    <ul>{collection.map(item => <li onClick={() => handleToggle(item)}>{item.value}</li>)}</ul>
  
  </BaseLayout>

}


export default CollectionPage;