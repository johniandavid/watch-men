import './App.css';

import ControlledTabs from "./Components/Tabs"
import {useEffect, useState} from "react";


function App() {
    const { uuid } = require('uuidv4');
    const [user_id, setUserId] = useState("");

    function getUserId() {
        if(window.localStorage.getItem("user_id") == null) {
          let userid = uuid()
            window.localStorage.setItem("user_id",`${userid}`)
            //Welcome message and a name and phone number popup
            /*
            const user = {
              "user_id" : userid,
              "name" : name,
              "phone_number" phoneNumber
            }
            */
            //postUser(user);
        }
        setUserId(window.localStorage.getItem("user_id"))
    }

    useEffect(() => {
        getUserId()
    }, []);


  return (
      <div className="main text-center">
        <ControlledTabs userid={user_id}/>
      </div>

  );
}

export default App;
