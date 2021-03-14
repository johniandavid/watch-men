import { useEffect, useState } from 'react'
import { Button, Container, Card, CardImg} from 'react-bootstrap'
import {deleteProduct, getAllProducts} from "../../Data/productRequests"

function Products(props) {

    const [products,setProducts] = useState([])

    async function fetchData() {
        const productList = []
        const data = await getAllProducts(props.user_id);

        for (const product_id in data){
            productList.push(data[product_id])
        }
        setProducts(productList)
    }

    async function deleteData(product_id){
        deleteProduct(props.user_id, product_id)
        fetchData()
    }

    function handleOnClick(product_id) {
        deleteData(product_id)
    }

    useEffect(() => {
        fetchData()
    },[])

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
        <Container>
            <h4>Product</h4>
            {productCards}
        </Container>
    )
}

export default Products;