import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish : null,
            dishes : DISHES
        };
    }
    onDishSelect(dishId){
        this.setState({ selectedDish : dishId});
    }
    
    render() {

        return (
            <div>
            <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
            </Navbar>
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            <DishDetailComponent dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
            </div>
        );
    }
}

export default Main;