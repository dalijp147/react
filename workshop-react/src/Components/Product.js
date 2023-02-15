import React, { Component } from "react";
import { Card, Button, Row } from "react-bootstrap";
import product from '../products.json';
class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {
            product: props.product,
             
           likes:0
        };
        this.addLikes = this.addLikes.bind(this)
    }
addLikes(){
    this.setState((oldState)=>({
        likes: oldState.likes +1
    }))
}
    render(){
        return(
            <Card style={{ width: '19rem' , height: '19rem'}}>
         <Card.Img
          src={require("../assets/images/" + this.props.product.img)}/>
            <Card.Body>
              <Card.Title>{this.props.product.name}</Card.Title>
              <Card.Text>
              {this.props.product.price}
              </Card.Text>
              <Card.Text>
              {this.props.product.description}
              </Card.Text>
            </Card.Body>
            <Row >
            <button variant="primary " style={{ width: '5rem'}}  onClick={this.addLikes}>likes {this.state.likes}</button>
            <Button variant="primary" style={{ width: '5rem'}}>buy</Button>{' '}
            </Row>
           
          </Card>)
    }
}
export default Product;