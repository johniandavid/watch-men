import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import Products from "../Pages/Products/Products";
import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";

function ControlledTabs(props) {
    const [key, setKey] = useState('home');



    return (
                <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                    <Tab eventKey="home" title="Home">
                        <Home user_id={props.userid}/>
                        </Tab>
                    <Tab eventKey="proucts" title="Products">
                        <Products user_id={props.userid}/>
                    </Tab>
                    <Tab eventKey="users" title="User" >
                        <User user_id={props.userid}/>
                    </Tab>
                </Tabs>
    );
}

export default ControlledTabs;