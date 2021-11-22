import React from "react"
import ImageEditor from "../ImageEditor"
import { Modal, Button, Container, Card, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faToolbox } from "@fortawesome/free-solid-svg-icons"
import { useReinLocalStorage } from "../../../hooks/useReinLocalStorage"

interface Props {
  imgAddress: string
  compId: string
}

const EngageImage: React.FC<Props> = props => {
  // modal code
  const [show, setShow] = React.useState(false)

  const ReinStorage = useReinLocalStorage();

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Card>
        <Card.Header>
          <Button variant="secondary" onClick={handleShow}>
            <FontAwesomeIcon icon={faToolbox}></FontAwesomeIcon>
          </Button>{" "}
          <Form.Check
            type="checkbox"
            label="Check me out"
            defaultChecked={ReinStorage.retrieveItem(props.compId) ? true : false}
            onClick={() => ReinStorage.toggleItem({value: props.imgAddress, id:props.compId})}
          />
          Example image heading...
        </Card.Header>
        <Card.Img variant="bottom" src={props.imgAddress} />
      </Card>

      <Modal size="xl" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
          <ImageEditor imgAddress={props.imgAddress}></ImageEditor>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EngageImage
