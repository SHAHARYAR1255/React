import React  from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row,Col, Input} from 'reactstrap';
import {LocalForm, Errors , Control} from 'react-redux-form';
import { Card, CardImg,  CardText, CardBody, CardTitle, Breadcrumb , BreadcrumbItem, Label } from 'reactstrap';
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
               <CommentForm />
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
            console.log('here is maal : ' + JSON.stringify(values));
            alert('here is maal : ' + JSON.stringify(values));

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
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                
                                <Label htmlFor="rating">Rating</Label>
                                <Input type="select" name="rating" id="rating">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </Input>
                               <Label htmlFor="name">Your Name</Label>
                               <Control.text model=".name" id="name" name="name"
                                            placeholder="Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                             />
                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                         />
                                       
                                         <Label htmlFor="feedback">Comment</Label>
                                       
                                          <Row>
                                          <textarea className="ml-3" name="feedback" rows="6" cols='70'></textarea>
                                          </Row>
                                             <Button className='mt-3' type="submit" color="primary">submit</Button>
                            </LocalForm>
                        </ModalBody>
                </Modal>
                </>
            );
        }
    }

export default DishdetailComponent;
