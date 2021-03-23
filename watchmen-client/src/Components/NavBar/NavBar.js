import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Products/Products";
import User from "../../Pages/User/User";

import { Nav, Navbar } from 'react-bootstrap';

import "./NavBar.css"

function NavBar(props) {

    return(

        <div>
            <Navbar bg="dark " variant="dark">
                <Navbar.Brand>Watchmen</Navbar.Brand>
                <Nav className="mr-auto">
                     <Nav.Link onClick={() => {props.router(<Home userid={props.userid} router={props.router}/>)}}>Home</Nav.Link>
                     <Nav.Link onClick={() => {props.router(<Products userid={props.userid} router={props.router}/>)}}>Products</Nav.Link>
                     <Nav.Link onClick={() => {props.router(<User userid={props.userid} router={props.router}/>)}}>User</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
export default NavBar;