import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Loading} from './LoadingComponent';
import { baseurl }  from '../shared/baseurl';
import { FadeTransform } from 'react-animation-components';


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
  }
    return (
      <div>
      <FadeTransform
      in
      transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
      <Card>
              <CardImg src={baseurl + item.image} alt={item.name} />
              <CardBody>
              <CardTitle>{item.name}</CardTitle>
              {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
              <CardText>{item.description}</CardText>
              </CardBody>
      </Card>
      </FadeTransform>
      </div>
    )}

const Home = (props) => {
    return(
      <div className="container">
        <div className="row align-items-start" >
          <div className="col-12 col-md m-1">
            <RenderCard  errMess={props.disherrMess} isLoading={props.dishisLoading} item={props.dish}/>
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.promotion} errMess={props.promoErrMess} isLoading={props.promoLoading}/>
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.leader} errMess={props.leaderErrMess} isLoading={props.leaderLoading}/>
          </div>
        </div>
      </div>
    );
}

export default Home;   