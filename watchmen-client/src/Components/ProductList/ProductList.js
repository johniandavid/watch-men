import {Button, Card, CardBody, CardImg, Col, Row} from "reactstrap";
import "./ProductList.css"

function ProductList(props) {

     let productCards = props.productList.map(product => {
       return (
                <div>
                    <Card className="text-center">
                        <Row>
                            <div className="thumbnail">
                                <CardImg src={`${product.image}`}></CardImg>
                                <div className="middle">
                                    <Button className="btn-round" size="sm" color="danger" onClick={() => {props.handleClick(product.product_id)}}>Delete</Button>
                                </div>
                            </div>
                            <Col>
                                <a href={product.url} target="_blank">
                                    <div className="product-title">
                                        <h6 >{product.name}</h6>
                                    </div>
                                    <div className="product-price">
                                        <CardBody>${product.price}</CardBody>
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </Card>
                </div>
            );
    });

    return(
        <div>
            {productCards}
        </div>
    )
}

export default ProductList;