import { faStore, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Button, ListGroup } from "react-bootstrap"
import { ReinCollectAble, useReinLocalStorage } from "../../../hooks/useReinLocalStorage"
import { ReinUtils } from "../../../utils/ReinUtil"
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"

/**
 * Component handles rendering of saved content.
 * @returns 
 */
const Databasket = () => {
  const { retrieveCollection, toggleItem } = useReinLocalStorage<boolean>()

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

  return (
    <ReinCardGrid>
      {collection.map((item: ReinCollectAble<unknown>) => (
        <ReinGridCard 
          excerpt="testexcerpt"
          faIcon={faStore}
          targetAudience={["visitor"]}
          title={item.title}
          type={item.type}
          url={`/content/${item.type}/${item.id}`}
          footerContent={<Button variant="light" onClick={() => handleToggle(item)}><FontAwesomeIcon icon={faTrash}/></Button>}
        ></ReinGridCard>
      ))}
    </ReinCardGrid>
  )
}

export default Databasket
