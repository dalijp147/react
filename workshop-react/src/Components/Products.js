import { Alert } from "bootstrap";
import React, { Component }  from "react";
import { Container,Row ,Col} from "react-bootstrap";
import products from "../products.json";

import Product from "./Product";
class Products extends Component{
 
    render(){
        return(
       
            <Container>
               <Row>
          {products.map((product, index) => (
            <Col style={{margin: '1rem'}}key={index} lg={3}>
              <Product  product={product}></Product>
            </Col>
          ))}
        </Row>
            </Container>
        )
    }
}
export default Products;