import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";


import "./Home.css";

function Home(props) {
    const [url,setUrl] = useState("");

    function getURL() {
        window.postMessage({ type: "GET_URL" }, "*");
        console.log(url)
        //Calls postProduct(props.user_id,url) in ./Data/ProductRequests
    }
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
            </div>
            <div className="add-button">
                <Button size="md" variant="light" onClick={getURL}>Watch this Product</Button>
            </div>
        </div>
    );
}

export default Home;