import { faDatabase, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { Button, ListGroup } from "react-bootstrap"
import { ReinCollectAble, useReinLocalStorage } from "../../../hooks/useReinLocalStorage"
import { ReinUtils } from "../../../utils/ReinUtil"
import SideMainLayout from "../Layout/SideMainLayout"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"
import BasketSharer from "./BasketSharer"

/**
 * Component handles rendering of saved content.
 * @returns 
 */
const Databasket = () => {
  const { retrieveCollection, toggleItem, saveCollection, mapFaSymbol } = useReinLocalStorage<unknown>()

  const [collection, setCollection] = React.useState([])

  /**
   * Reads out local storage and sets state accordingly on startup.
   */
  React.useEffect(() => {
    if (ReinUtils.checkSSR()) return
    setCollection(retrieveCollection())
  }, [])

  /**
   * Handles toggling of local storage and synchronizes it with the local state.
   * @param obj
   */
  const handleToggle = obj => {
    const newArr = toggleItem(obj)
    setCollection(newArr)
  }

  /**
   * Updates state and saves value to local storage.
   * @param data Data to be saved
   */
  const handleImport = (data: ReinCollectAble<unknown>[]) => {
    if(ReinUtils.checkSSR())return;
    setCollection(data);
    saveCollection(data);
  }


  /**
   * Method for sharing current collection via link.
   * @returns 
   */
  const buildShareLink = () => {
    if(ReinUtils.checkSSR())return;
    let curUrl = new URL(window.location.href);
    let basketVal = collection.map(item => item.id).join(",");
    curUrl.searchParams.set("basket",basketVal);
    alert(curUrl.toString());
  }


  return (
    <SideMainLayout
    side={
      <div className="card reincard p-4">
        <Button variant="outline-secondary" onClick={buildShareLink}>Share my collection</Button>
        <br />
        <div>
          <b className="text-secondary">What is this?</b>
        </div>
        <p>Here you find all your collected items...</p>
        <div>
          <b className="text-secondary">Training (5)</b>
        </div>
        <ul className="m-0 p-1 pt-0" style={{ listStyle: "none" }}>
          <li className="p-0 m-0">
            <small>
              <Link to={`/content/training/test`} className="text-dark">
                Sample material
              </Link>{" "}
              <span className="text-muted">(12.4.2012)</span>
            </small>
          </li>
          <li className="p-0 m-0">
            <small>
              <Link to={`/content/training/test`} className="text-dark">
                Testme
              </Link>{" "}
              <span className="text-muted">(12.4.2012)</span>
            </small>
          </li>
        </ul>
        <br />
        <div>
          <b className="text-secondary">News (3)</b>
        </div>
        <ul className="m-0 p-1 pt-0" style={{ listStyle: "none" }}>
          <li className="p-0 m-0">
            <small>
              <Link to={`/content/training/test`} className="text-dark">
                Another sample
              </Link>{" "}
              <span className="text-muted">(12.4.2012)</span>
            </small>
          </li>
        </ul>
      </div>
    }
    >
    
    { collection.length !== 0 && <BasketSharer import={handleImport}></BasketSharer>}
    <ReinCardGrid>
      {collection.map((item: ReinCollectAble<unknown>) => (
        <ReinGridCard 
          excerpt={item.excerpt}
          faIcon={ mapFaSymbol(item)}
          targetAudience={["visitor", "professional"]}
          title={item.title}
          type={item.type}
          url={`/${item.type}/${item.id}`}
          footerContent={<Button variant="light" onClick={() => handleToggle(item)}><FontAwesomeIcon color="lightgrey" icon={faTrash}/></Button>}
        ></ReinGridCard>
      ))}
    </ReinCardGrid>
    </SideMainLayout>
  )
}

export default Databasket
