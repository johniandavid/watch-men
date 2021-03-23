import SignupForm from "../../Components/SignupForm/SignupForm";
import Home from "../Home/Home";

import {postUser} from "../../Data/userRequests";
import { Spinner } from "react-bootstrap";
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Button } from 'reactstrap';

import "./Start.css"

function Start(props){

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);

    function handleFormName(e){
         setName(capitalize(e.target.value).trim())
    }

    function handleFormPhoneNumber(e) {
        setPhoneNumber(e.target.value)
    }

    function capitalize(s) {
        var firstLetter = s.substr(0, 1);
        return firstLetter.toUpperCase() + s.substr(1);
    }

    async function handleOnClicked() {
        let user_id = uuidv4();
        window.localStorage.setItem("user_id", user_id)
        window.localStorage.setItem("name", name)
        const user = {
          "user_id" : user_id,
          "name" : name,
          "phone_number" : phoneNumber
        }
        setLoading(true)
        await postUser(user)
        setLoading(false)
        props.router(<Home userid={user_id} router={props.router}/>)
    }

    if(loading) {
        return (
                <div className="start-spinner">
                      <Spinner animation="border" variant="info" />
                </div>
            )
    }

    return (
        <div>
            <div className="page-title">
                <h2 className="text-bold">Watchmen</h2>
            </div>
            <div className="signup">
                <SignupForm formName={handleFormName} formPhoneNum={handleFormPhoneNumber}/>
                <Button className="btn-round" color="info" size="sm" onClick={handleOnClicked} type="submit" >Start Now</Button>
            </div>
        </div>
    )
}

export default Start;