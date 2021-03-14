import './App.css';

import {useEffect, useState} from "react";

import Start from "./Pages/Start/Start"
import Main from "./Pages/Main/Main"


function App() {
    const [user_id, setUserId] = useState("");

    function getUserId() {
        if(window.localStorage.getItem("user_id") != null) {
            setUserId(window.localStorage.getItem("user_id"))
        }
    }

    function isUser() {
        if(user_id !== "") {
            return <Main userid={user_id} />;
        }
        else{
            return <Start />
        }
    }

    useEffect(() => {
        getUserId()
    },);

    return (
      <div className="main text-center">
        {isUser()}
      </div>
    )
}

export default App;
