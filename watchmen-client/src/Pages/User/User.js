import Start from "../Start/Start";
import NavBar from "../../Components/NavBar/NavBar";
import DeleteUserModal from "../../Components/DeleteUserModal/DeleteUserModal";

import {deleteUser} from "../../Data/userRequests";

import { useState } from 'react'
import { Container, Button } from 'react-bootstrap'


function User(props) {

    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false)
    }

    function handleShow() {
        setShow(true)
    }

    async function handleDelete() {
        await deleteUser(props.userid)
        window.localStorage.removeItem("user_id")
        window.localStorage.removeItem("name")
        props.router(<Start router={props.router}/>)
    }

    return (
        <div>
            <NavBar userid={props.userid} router={props.router} />
            <Container>
                <h5>User ID: {props.userid}</h5>
                 <DeleteUserModal showModal={show} handleCloseFunction={handleClose} handleShowFunction={handleShow} handleDeleteFunction={handleDelete}/>
                <Button onClick={handleShow}>Delete User</Button>
            </Container>
        </div>
    );
}

export default User;