import React, { Component } from 'react';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish : null,
            dishes : DISHES
        };
    }

    render() {
        const HomePage = () =>{ // this is  one way 
            return(
                <Home />
            );
        }

        return (
            <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/*this is second way */ />} /> 
                <Redirect to='./home' />
            </Switch>
            <Footer />
            </div>
        );
    }
}

export default Main;