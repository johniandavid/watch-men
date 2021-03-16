import NavBar from "../../Components/NavBar/NavBar";
import UrlInput from "../../Components/UrlInput/UrlInput";

import {postProduct} from "../../Data/productRequests";

import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";

import "./Home.css";

function Home(props) {
    const [url , setUrl] = useState("");
    const [name, setName] = useState("User");

    async function handleOnClicked() {
        const product = {
            "url" : url
        }
        await postProduct(props.userid, product)
        setUrl("")
    }

    function handleFormUrl(e) {
        setUrl(e.target.value)
    }

    useEffect(() =>{
        if(window.localStorage.getItem("name") != null) {
            setName(window.localStorage.getItem("name"))
        }
    }, []);

    return (
        <div>
            <NavBar userid={props.userid} router={props.router} />
            <div className="welcome-message">
                <h4>Hello {name}!</h4>
            </div>
            <UrlInput formUrl={handleFormUrl} urlValue={url}/>
            <div className="add-button">
                <Button size="md" variant="light" type="submit" onClick={handleOnClicked}>Watch this Product</Button>
            </div>
        </div>
    );
}

export default Home;