import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { baseUrl } from '../shared/baseUrl'
import Loading from './Loading'
import {FadeTransform} from 'react-animation-components';

function RenderCard({item,isLoading,errorMess}){
    if(isLoading){
        return <Loading/>     
    }
    else if(errorMess){
        return  <h4>{errorMess}</h4>       
    }
    else{
        console.log(item);
    return <>
     <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
    <Card>
        <CardImg src={baseUrl+item.image} alt={item.name}/>
        <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation? <CardSubtitle>{item.designation}</CardSubtitle>:null }
            <CardText>{item.description}</CardText>
        </CardBody>
    </Card>
    </FadeTransform>
    </>
}}

function Home(props) {
    return (
        <div className='conatiner'>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errorMess={props.dishesErrorMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promosLoading} errorMess={props.promosErrorMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} isLoading={props.leadersLoading} errorMess={props.leadersErrorMess} />
                </div>
            </div>
        </div>
    )
}

export default Home
