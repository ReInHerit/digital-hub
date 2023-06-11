import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RestartModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  React.useEffect(() => {
    setTimeout(() => {
        setShow(true)
    }, 120000)
}, [setShow])
  
  return (
    <>
      <Modal 
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
       show={show} 
       onHide={handleClose}>
       
        <Modal.Header closeButton>
        <Modal.Title>Restart?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Möchten Sie noch einmal bei der ersten Frage (von drei) beginnen?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Schließen
          </Button>
          <Button 
          href="/exhibitions/conflicts/inGalleryDE/1stQuestionConflictDE/#Question1ConflDE"
          variant="primary">
          Los zum Frage 1!
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}

export default RestartModal;


{/*
  React.useEffect(() => {
    setTimeout(() => {
        setShow(true)
    }, 5000)
}, [setShow])
*/}