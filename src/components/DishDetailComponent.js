import React, { Component } from 'react';
import { Card , CardImg , CardBody , CardTitle , CardText , CardImgOverlay } from 'reactstrap';

class DishDetailComponent extends Component {
    render() {
        return (
            <div>
                <Card>
               <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
               <CardBody>
                   <CardTitle>{this.props.dish.name}</CardTitle>
                   <CardText>{this.props.dish.description}</CardText>
               </CardBody>
           </Card>
            </div>
        )
    }
}

export default DishDetailComponent;
