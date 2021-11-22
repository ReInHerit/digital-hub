import React from "react"
import { Button, ListGroup } from "react-bootstrap"
import { useReinLocalStorage } from "../../../hooks/useReinLocalStorage"
import { ReinUtils } from "../../../utils/ReinUtil"

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
    <ListGroup>
      {collection.map(item => (
        <ListGroup.Item>
          <p>{item.value}</p>
          <Button onClick={() => handleToggle(item)} variant="danger">-</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default Databasket
