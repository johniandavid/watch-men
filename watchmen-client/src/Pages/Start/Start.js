import SignupForm from "../../Components/SignupForm/SignupForm";
import Home from "../Home/Home";

import {postUser} from "../../Data/userRequests";

import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Button } from 'react-bootstrap';

function Start(props){

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

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
        await postUser(user)
        props.router(<Home userid={user_id} router={props.router}/>)
    }

    return (
        <div>
            <h5>Watchmen!</h5>
            <SignupForm formName={handleFormName} formPhoneNum={handleFormPhoneNumber}/>
            <Button size="sm" onClick={handleOnClicked} type="submit" >Start Now</Button>
        </div>
    )
}

export default Start;