import Start from "../Start/Start";
import NavBar from "../../Components/NavBar/NavBar";
import DeleteUserModal from "../../Components/DeleteUserModal/DeleteUserModal";

import {deleteUser} from "../../Data/userRequests";

import { useState } from 'react'
import { Container, Button } from 'react-bootstrap'

import "./User.css"


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
            <div className="user">
                <h6>User ID: {props.userid}</h6>
                 <DeleteUserModal showModal={show} handleCloseFunction={handleClose} handleShowFunction={handleShow} handleDeleteFunction={handleDelete}/>
            </div>
            <div className="delete-btn">
                <Button onClick={handleShow}>Delete User</Button>
            </div>
        </div>
    );
}

export default User;