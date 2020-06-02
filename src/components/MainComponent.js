import React, { Component } from 'react';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Contact from './ContactComponent';
import {COMMENTS} from '../shared/Comments';
import {LEADERS} from '../shared/Leader';
import { PROMOTIONS } from '../shared/Promotion';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish : null,
            dishes : DISHES,
            comments : COMMENTS,
            promotions : PROMOTIONS,
            leaders : LEADERS
        };
    }

    render() {
        const HomePage = () =>{ // this is  one way 
            return(
                <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
            );
        }
        const DishWithId = ({match}) =>{
            return(
                <DishDetailComponent 
                    dish = {this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId , 10))}
                    />
            );
        }

        return (
            <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/*this is second way */ />} /> 
                <Route path ='/menu/:dishId' component={DishWithId} />
                <Route exact path='/contactus' component={Contact} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
            </div>
        );
    }
}

export default Main;