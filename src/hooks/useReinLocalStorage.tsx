import { ReinUtils } from "../utils/ReinUtil"

interface ReinCollectAble {
  id: string;
  value: any;
}



/**
 * Saves given ReinCollectable to the local storage.
 * @param storeKey key used to save given item.
 * @returns
 */
export const useReinLocalStorage: (
  storeKey: string,
) => {
  retrieveItem: () => ReinCollectAble | null
  toggleItem: (toSave: ReinCollectAble) => void;
  retrieveCollection: () => ReinCollectAble[]
} = (collectableId) => {

  const COLLECTION_ID = "REINHERIT_COLLECTION";



  /**
   * Returns item with corresponent id given to the hook.
   * @returns Saved item and null if nothing found. 
   */
  const retrieveItem = () => {
    if (ReinUtils.checkSSR()) return
    
    const parsedCollection = retrieveCollection();
    if(parsedCollection.length === 0)return null;

    const retrievedCollectable = parsedCollection.find(val => val.id === collectableId)
    if(!retrievedCollectable)return null;

    return retrievedCollectable;
    
  }


  /**
   * Returns the complete saved collection inside the local storage.
   * @returns Array of Objects.
   */
  const retrieveCollection = () => {
    if(ReinUtils.checkSSR())return;
    const retrievedCollection: string | null = localStorage.getItem(COLLECTION_ID);
    if (!retrievedCollection){
      localStorage.setItem(COLLECTION_ID, "[]");
      return []
    }
    const parsedCollection: ReinCollectAble[] = JSON.parse(retrievedCollection);
    if(!parsedCollection){
      localStorage.setItem(COLLECTION_ID, "[]");
      return []
    }
    return parsedCollection;
  }

  
  /**
   * Removes / adds items according to id property and given id to the hook.
   * @param toSave Object to be saved.
   */
  const toggleItem = (obj: ReinCollectAble) => {
    if (ReinUtils.checkSSR()) return
    //const strToSave = JSON.stringify(toSave)
    //localStorage.setItem(collectableId, strToSave)
    let parsedCollection = retrieveCollection();
    let found = parsedCollection.find(val => val.id === collectableId);
    if(!found){
      let newARr = JSON.parse(JSON.stringify(parsedCollection))
      newARr.push(obj);
      localStorage.setItem(COLLECTION_ID, JSON.stringify(newARr));
    } else {
      //let index = parsedCollection.indexOf(found);
      const filtered = parsedCollection.filter(val => val.id !== collectableId);
      localStorage.setItem(COLLECTION_ID, JSON.stringify(filtered))
    }
  }


  return {
    retrieveItem,
    toggleItem,
    retrieveCollection
  }
}
