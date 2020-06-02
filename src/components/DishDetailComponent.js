import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle, Breadcrumb , BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const RenderDish = ({dish}) =>{
    
    if (dish != null)
    {
        return(
            <div>
                <Card>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><b>{dish.name}</b></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else
    {
        return(
        <div></div>
        );
    }
}

const RenderComment = ({comments}) =>{
    if(comments == null)
        {
            return(
            <div></div>
            )
        }
        const comment =comments.map(cmts => {
            return(
                <li key={cmts.id}>
                    <p>{cmts.comment}</p>
                    <p>-- {cmts.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(cmts.date))}
                </p>
                </li>
            )
        })
        return(
            <div className="col-12 col-md-5 m-1">
                <h4><b>Comments</b></h4>
                <ul className="list-unstyled">
                    {comment}
                </ul>
            </div>
        )
    }

const DishdetailComponent = (props) =>{
    const dish= props.dish;
        if(dish == null)
        {
            return(
                <div></div>
            )
        }else{
         return (
             <div className="container">
                  <div className="row">
              <Breadcrumb>
              <BreadcrumbItem ><Link to='./menu'>Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active >{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="col-12">
            <h3>{props.dish.name}</h3>
            <br></br><hr />
            </div>
                  <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComment comments = {props.comments}/>
                     </div>
                    
                 </div>  
             </div>
         
         )
        }
    }

export default DishdetailComponent;
