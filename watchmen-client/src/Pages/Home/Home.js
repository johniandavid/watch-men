import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";

import {getUser} from "../../Data/userRequests";

import "./Home.css";
import UrlInput from "../../Components/UrlInput/UrlInput";
import {postProduct} from "../../Data/productRequests";


function Home(props) {
    const [url , setUrl] = useState("");
    const [name, setName] = useState("");

    async function fetchData() {
        const data = await getUser(props.user_id);
        window.localStorage.setItem("name", data["name"])
        setName(data["name"])
    }

    async function handleOnClicked() {
       //window.postMessage({ type: "GET_URL" }, "*");
        // console.log(url)

        const product = {
            "url" : url
        }
        await postProduct(props.user_id, product)
        window.location.reload()
    }

    function handleFormUrl(e) {
        setUrl(e.target.value)
    }

    useEffect(() =>{
        if(window.localStorage.getItem("name") != null) {
            setName(window.localStorage.getItem("name"))
        }
        else{
            fetchData()
        }
    }, []);

    useEffect(() => {
        window.addEventListener("message", function(event) {
            if (event.source !== window) return;
            if (event.data.type && (event.data.type === "URL_RESULT")) {
                setUrl(event.data.url);
            }
        });
    }, []);

    return (
        <div>
            <div className="welcome-message">
                <h4>Hello {name}!</h4>
            </div>
            <UrlInput formUrl={handleFormUrl} />
            <div className="add-button">
                <Button size="md" variant="light" type="submit" onClick={handleOnClicked}>Watch this Product</Button>
            </div>
        </div>
    );
}

export default Home;