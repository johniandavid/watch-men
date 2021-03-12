import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

function Products(props) {

    const [products,setProducts] = useState([])

    async function getProducts() {
        //const products = await getAllProducts(props.user_id);
        //setProducts(products)
    }

    useEffect(() => {
        getProducts()
    }, [])

    /*
    let listOfProducts = products.map((product) => {

        return(
            <a href={${product.url} target="_blank"}>
                <li>
                    <h5>${product.name}</h5>
                    <span>${product.price}</span>
                </li>
            </a>
        );
    }
     */


    return (
        <Container>
            <h4>Product</h4>
            <ul>

            </ul>
        </Container>
    );
}

export default Products;