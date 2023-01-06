import React, {Component} from 'react';
import './App.css';
import {Cart} from './mycomponents/cart';
import {AddProduct} from './mycomponents/addproduct';
import {Title} from './mycomponents/title';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
      <Nav.Link href="/addproduct">Add Product</Nav.Link>
        </Nav>
        </Navbar>
        <br />
        <Routes>
          <Route path='/' element={<Title />} exact />
          <Route path='/cart' element={<Cart />} exact />
          <Route path='/addproduct' element={<AddProduct />} exact />
        </Routes>
    </div>
    </Router>
  );
}
}

export default App;
