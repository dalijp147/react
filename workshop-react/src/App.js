import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Products from './Components/Products.js';
import { Alert } from 'react-bootstrap';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <Alert style={{color: 'black' , backgroundColor:'green' , fontWeight:'bold'}}>hey welcome to our shop <br>
        </br>
        thank you for choosing our store</Alert>
   <Products></Products>
      </div>
    )
  }
}

export default App;
