import NavBar from "../../Components/NavBar/NavBar";
import UrlInput from "../../Components/UrlInput/UrlInput";

import {postProduct} from "../../Data/productRequests";

import { Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Button } from "reactstrap";

import "./Home.css";

function Home(props) {
    const [url , setUrl] = useState("");
    const [name, setName] = useState("User");
    const [loading, setLoading] = useState(false);

    async function handleOnClicked() {
        window.postMessage({ type: "GET_URL" }, "*");
        const product = {
            "url" : url
        }
        setLoading(true)
        await postProduct(props.userid, product)
        setUrl("")
        setLoading(false)
    }

    function handleFormUrl(e) {
        setUrl(e.target.value)
    }

    useEffect(() =>{
        if(window.localStorage.getItem("name") != null) {
            setName(window.localStorage.getItem("name"))
        }
    }, []);

    if(loading){
        return (
            <div>
                <NavBar userid={props.userid} router={props.router} />
                <div className="home-spinner">
                     <Spinner animation="border" variant="info" />
                </div>
            </div>
        )
    }
    return (
        <div>
            <NavBar userid={props.userid} router={props.router} />
            <div className="welcome-message">
                <h4>Hello {name}!</h4>
            </div>
            <UrlInput formUrl={handleFormUrl} urlValue={url}/>
            <div className="add-button">
                <Button className="btn-round"  color="primary" size="md" type="submit" onClick={handleOnClicked} outline>Watch this Product</Button>
            </div>
        </div>
    );
}

export default Home;


    /*
    useEffect(() => {
        console.log("Set up event listeners from Content script")
        window.addEventListener("message", function(event) {
          if (event.source !== window) return;
          if (event.data.type && (event.data.type === "GET_URL_RESULT")) {
            console.log(event.data.url);
          }
        });
    }, []);*/