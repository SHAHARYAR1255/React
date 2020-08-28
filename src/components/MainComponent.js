import React, { Component } from 'react';
import DishDetailComponent from './DishDetailComponent';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchPromos, fetchComments} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapDispatchToProps = dispatch => ({
  
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes : () => {dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchComments : () => dispatch(fetchComments()) ,
    fetchPromos : () => dispatch(fetchPromos())
  
  });

const mapStateToProps = state =>{
    return{
        dishes : state.dishes ,
        comments : state.comments,
        promotions :state.promotions,
        leaders : state.leaders
    };
}

class Main extends Component {
    constructor(props) {
        super(props);
    }


 componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
   }
    
    render() {
        const HomePage = () =>{ // this is  one way 
            return(
                <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
              dishisLoading={this.props.dishes.isLoading}
              disherrMess={this.props.dishes.errMess}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
          />
            );
        }
        const AboutPage = () =>{
            return(
                <About leaders = {this.props.leaders}/>
            );
        }
        const DishWithId = ({match}) =>{
            return(
                <DishDetailComponent 
                    dish = {this.props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId , 10))}
                    postComment = {this.props.postComment}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    commentsErrMess={this.props.comments.errMess} />
            );
        }

        return (
            <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/*this is second way */ />} /> 
                <Route path ='/menu/:dishId' component={DishWithId} />
                <Route exact path='/contactus' component={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                <Route exact path='/aboutus' component={AboutPage} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));