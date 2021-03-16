import './App.css';

import {useEffect, useState} from "react";

import Start from "./Pages/Start/Start"
import Home from "./Pages/Home/Home";


function App() {
    const [user_id, setUserId] = useState("");
    const [page, setPage] = useState("");

    function handleOnClicked(route) {
        setPage(route)
    }

    function getUserId() {
        if(window.localStorage.getItem("user_id") != null) {
            const id = window.localStorage.getItem("user_id")
            setUserId(id)
            setPage(<Home userid={id} router={handleOnClicked}/>)
        }
        else{
            setPage(<Start router={handleOnClicked}/>)
        }
    }

    useEffect(() => {
        getUserId()
    },[]);

    return (
      <div className="main text-center">
        {page}
      </div>
    )
}

export default App;
