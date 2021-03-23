import NavBar from "../../Components/NavBar/NavBar";

import {deleteProduct, getAllProducts} from "../../Data/productRequests"

import { useEffect, useState } from 'react'
import { Row, Col, Card, CardImg, CardBody, CardTitle, Button, Container } from 'reactstrap';

import "./Products.css"
import ProductList from "../../Components/ProductList/ProductList";
import {Spinner} from "react-bootstrap";

function Products(props) {

    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)

    async function fetchData() {
        const productList = [];
        setLoading(true)
        const data = await getAllProducts(props.userid);
        setLoading(false)
        setProducts(Object.values(data));
    }

    async function deleteData(product_id){
        await deleteProduct(props.userid, product_id);
        fetchData();
    }

    function handleOnClick(product_id) {
        deleteData(product_id);
    }

    useEffect(() => {
         fetchData();
         const interval = setInterval(() => {
                fetchData();
             }, 3600000);
         return () => clearInterval(interval)
    },[])

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
            <div className="page-title">
                <h4>Product</h4>
            </div>
            <Container>
                <ProductList productList={products} handleClick={handleOnClick} />
                <div className="padding">
                </div>
            </Container>
        </div>
    )
}

export default Products;