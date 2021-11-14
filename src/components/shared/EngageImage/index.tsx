import React from "react"
import ImageEditor from "../ImageEditor"
import { Modal, Button } from "react-bootstrap"

interface Props {
  imgAddress: string
}

const EngageImage: React.FC<Props> = props => {

  // modal code
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <img src={props.imgAddress}></img>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EngageImage
