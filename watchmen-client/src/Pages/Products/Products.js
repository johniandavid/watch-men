import NavBar from "../../Components/NavBar/NavBar";

import {deleteProduct, getAllProducts} from "../../Data/productRequests"

import { useEffect, useState } from 'react'
import { Button, Container, Card, CardImg} from 'react-bootstrap'

function Products(props) {

    const [products,setProducts] = useState([])
    async function fetchData() {
        const productList = []
        const data = await getAllProducts(props.userid);
        setProducts(Object.values(data))

    }

    async function deleteData(product_id){
        await deleteProduct(props.userid, product_id)
        fetchData()
    }

    function handleOnClick(product_id) {
        deleteData(product_id)
    }

    useEffect(() => {
        fetchData()
    },[])

    var product_ids = Object.keys(products)

    let productCards = products.map(product => {
       return (
                <div>
                    <Card className="text-center">
                    <a href={product.url} target="_blank"><CardImg top src={`${product.image}`}></CardImg></a>
                    <h4>{product.name}</h4>
                    <h4>${product.price}</h4>
                    </Card>
                    <Button variant="danger" onClick={() => {handleOnClick(product.product_id)}}>Delete</Button>
                </div>

       );
    });

    return (
        <div>
            <NavBar userid={props.userid} router={props.router} />
            <Container>
                <h4>Product</h4>
                {productCards}
            </Container>
        </div>
    )
}

export default Products;