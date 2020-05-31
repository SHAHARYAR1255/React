import React, { Component } from 'react';
import {Navbar , NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        dishes : DISHES
      };
    
    }
    render() {
    return (
      <div>
      <Header></Header>
      <Menu dishes={this.state.dishes}/>
      <Footer />
    </div>
    )
  }
}

export default App;
