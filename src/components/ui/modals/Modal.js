import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalFunkoFone = ({ id, method }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Remove phone ID: {id}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={method}>
            Yes, I do
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalFunkoFone;
