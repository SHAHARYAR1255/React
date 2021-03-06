import React  from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row,Col} from 'reactstrap';
import {LocalForm, Errors , Control} from 'react-redux-form';
import { Card, CardImg,  CardText, CardBody, CardTitle, Breadcrumb , BreadcrumbItem, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseurl} from '../shared/baseurl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const RenderDish = ({dish}) =>{
    
    if (dish != null)
    {
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseurl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><b>{dish.name}</b></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }
    else
    {
        return(
        <div></div>
        );
    }
}

const RenderComment = ({comments, dishId , postComment}) =>{
    if(comments == null)
        {
            return(
            <div></div>
            )
        }
        const comment =comments.map(cmts => {
            return(
                <Fade in >
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
                </li></Fade>
            )
        })
        return(
            <div className="col-12 col-md-5 m-1">
                <h4><b>Comments</b></h4>
                <ul className="list-unstyled">
                    <Stagger in>
                    {comment}
                    </Stagger>
                </ul>
               <CommentForm dishId={dishId} postComment={postComment}/>
            </div>
        )
    }

const DishdetailComponent = (props) =>{
   
    const dish= props.dish;
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }

     else if(dish == null)
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
                        <RenderComment comments = {props.comments} dishId={props.dish.id} postComment={props.postComment}/>
                     </div>
                    
                 </div>  
             </div>
         
         )
        }
    }

    class CommentForm extends React.Component{
        constructor(props){
            super(props);
            this.state= {
                open : false
            }
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    
        }
        
        handleSubmit(values){
           this.props.postComment(this.props.dishId , values.rating , values.author , values.comment);

        }
    
        toggleModal(){
            this.setState({
                open : !this.state.open
            })
        }
    
        render(){
            const required = (val) => val && val.length;
            const maxLength = (len) => (val) => !(val) || (val.length <= len);
            const minLength = (len) => (val) => val && (val.length >= len);
           
            return(
                <>
                <Button outline onClick={this.toggleModal} className="btn btn-secondary"><span className="fa fa-pencil fa-lg"></span>Submitfeedback</Button>
                <Modal toggel={this.toggleModal} isOpen={this.state.open}>
                    <ModalHeader toggle={this.toggleModal}><b>Submit feedback</b></ModalHeader>
                        <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Col md="12">
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={12}>
                                        <Label htmlFor="author">Your Name</Label>

                                        <Control.text model=".author" id="author" name="author"
                                                      placeholder="Your Name"
                                                      className="form-control"
                                                      validators={{
                                                          required, minLength: minLength(3), maxLength: maxLength(15)
                                                      }}/>
                                        <Errors className="text-danger"
                                                model=".author"
                                                show="touched"
                                                messages={{
                                                    required: 'Required ',
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={12}>
                                        <Label htmlFor="comment">Comment</Label>
                                        <Control.textarea model=".comment" id="comment" name="comment" rows="6"
                                                          className="form-control"
                                        />

                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={12}>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                </Modal>
                </>
            );
        }
    }

export default DishdetailComponent;
