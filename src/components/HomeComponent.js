import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Loading} from './LoadingComponent';
import { baseurl }  from '../shared/baseurl';

const RenderCard = ({item, isLoading , errMess}) =>{
  if (isLoading) {
    return(
       <Loading />
    );
    }
  else if (errMess){
    return(
      <h4>{errMess}</h4>
    );
  }else
    return (
      <Card>
              <CardImg src={baseurl + item.image} alt={item.name} />
              <CardBody>
              <CardTitle>{item.name}</CardTitle>
              {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
              <CardText>{item.description}</CardText>
              </CardBody>
      </Card>
    );
}

const Home = (props) => {
    return(
      <div className="container">
        <div className="row align-items-start" >
          <div className="col-12 col-md m-1">
            <RenderCard  errMess={props.disherrMess} isLoading={props.dishisLoading} item={props.dish}/>
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.promotion} errMess={props.promoErrorMess} isLoading={props.promoLoading}/>
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.leader}/>
          </div>
        </div>
      </div>
    );
}

export default Home;   