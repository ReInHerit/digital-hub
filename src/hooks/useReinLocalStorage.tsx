import { faDatabase, faRss, faTools } from "@fortawesome/free-solid-svg-icons";
import { ReinUtils } from "../utils/ReinUtil"

export interface ReinCollectAble<T> {
  id: string;
  title: string;
  type:"news" | "tools";
  excerpt?: string;
  value: T;
}

export interface ReinImageObject {
  src: string,

}


/**
 * Saves given ReinCollectable to the local storage.
 * @param storeKey key used to save given item.
 * @returns
 */
export const useReinLocalStorage = <T extends unknown> () => {

  const COLLECTION_ID = "REINHERIT_COLLECTION";


  /**
   * Returns item with corresponent id given to the hook.
   * @returns Saved item and null if nothing found. 
   */
  const retrieveItem = (itemId: string) => {
    if (ReinUtils.checkSSR()) return
    
    const parsedCollection = retrieveCollection();
    if(parsedCollection.length === 0)return null;

    const retrievedCollectable = parsedCollection.find(val => val.id === itemId)
    if(!retrievedCollectable)return null;

    return retrievedCollectable;
    
  }


  /**
   * Overwrites / saves collection to Reinherit namespace.
   * @param data Data to be saved to local storage.
   * @returns 
   */
  const saveCollection = (data: ReinCollectAble<T>[]) => {
    if(ReinUtils.checkSSR())return;
    localStorage.setItem(COLLECTION_ID, JSON.stringify(data));

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
    const parsedCollection: ReinCollectAble<T>[] = JSON.parse(retrievedCollection);
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
  const toggleItem = (obj: ReinCollectAble<T>): ReinCollectAble<T>[] => {
    if (ReinUtils.checkSSR()) return
    //const strToSave = JSON.stringify(toSave)
    //localStorage.setItem(collectableId, strToSave)
    let parsedCollection = retrieveCollection();
    let found = parsedCollection.find(val => val.id === obj.id);
    if(!found){
      let newARr = JSON.parse(JSON.stringify(parsedCollection))
      newARr.push(obj);
      localStorage.setItem(COLLECTION_ID, JSON.stringify(newARr));
      return newARr;
    } else {
      //let index = parsedCollection.indexOf(found);
      const filtered = parsedCollection.filter(val => val.id !== obj.id);
      localStorage.setItem(COLLECTION_ID, JSON.stringify(filtered))
      return filtered;
    }
  }

  /** 
   * Returns corresponding fa-icon to collected item. 
  */
  const mapFaSymbol = (collectable: ReinCollectAble<T>) => {
    switch(collectable.type){
      case "news":
        return faRss
      case "tools":
        return faTools;
      default:
        return faDatabase;
    }

  }


  return {
    retrieveItem,
    toggleItem,
    retrieveCollection,
    saveCollection,
    mapFaSymbol
  }
}

useReinLocalStorage<boolean>()