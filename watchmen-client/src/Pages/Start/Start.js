import { v4 as uuidv4 } from "uuid";
import { Button } from 'react-bootstrap';

import { useState } from 'react';

import {postUser} from "../../Data/userRequests";

import SignupForm from "../../Components/SignupForm/SignupForm";

function Start(){

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
        window.localStorage.setItem("user_id",`${user_id}`)
        const user = {
          "user_id" : user_id,
          "name" : name,
          "phone_number" : phoneNumber
        }
        await postUser(user)
        window.location.reload()
    }

    return (
        <div>
            <h5>WELCOME!</h5>
            <SignupForm formName={handleFormName} formPhoneNum={handleFormPhoneNumber}/>
            <Button size="sm" onClick={handleOnClicked} type="submit" >Start Now</Button>
        </div>
    )
}

export default Start;