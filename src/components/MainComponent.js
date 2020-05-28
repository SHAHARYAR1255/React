import React, { Component } from 'react';
import { Card , CardImg , CardBody , CardTitle , CardText , CardImgOverlay } from 'reactstrap';
import DishDetailComponent from './DishDetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish : null,
            comments :null
        };
    }
    onDishSelect(dish){
        this.setState({ selectedDish : dish , comments : dish.comments});
    }
    renderDish(dish){
        if (dish != null ){
            return (
           <DishDetailComponent dish={dish}/>
            );
        }else{
            return(
            <div></div>
            );}
    }
    renderComments(comments){
        if (comments != null){
            let ments = comments.map(ment =>{
                return (
                    <div className="mt-3" >
                    <ul className="list-unstyled"  >
                        <li  key={ment.id} >{ment.comment}</li>
                        <li  key={ment.id + 1} className="mt-3">{"--" + ment.author }, &nbsp;
                         {new Intl.DateTimeFormat('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: '2-digit'
                         }).format(new Date(ment.date))}
                        </li>
                    </ul>
                    </div>
                );
            });
                return (
                    <div>
                    <h4>Comments</h4>
                    <div>{ments}</div>
                    </div>
                );
                }
        else{
            return(
                <div></div>
        );
        }
    }


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={()=> {this.onDishSelect(dish)}} >
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle >{dish.name}</CardTitle>
                </CardImgOverlay>
                 </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              
                  {menu}

            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments( this.state.comments)}
                </div>
            </div>
          </div>
        );
    }
}

export default Menu;