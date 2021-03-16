import { Button, Modal } from 'react-bootstrap'

function DeleteUserModal(props) {

    return (
        <>
          <Modal show={props.showModal} onHide={props.handleClose}>
            <Modal.Header>
              <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this user profile?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.handleCloseFunction}>
                Close
              </Button>
              <Button variant="primary" onClick={props.handleDeleteFunction}>
                Delete User
              </Button>
            </Modal.Footer>
          </Modal>
        </>
    );
}

export default DeleteUserModal