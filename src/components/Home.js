import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import Loading from './Loading'

function RenderCard({item,isLoading,errorMess}){
    if(isLoading){
        return <Loading/>     
    }
    else if(errorMess){
        return  <h4>{errorMess}</h4>       
    }
    else{
    return <>
    <Card>
        <CardImg src={item.image} alt={item.name}/>
        <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation? <CardSubtitle>{item.designation}</CardSubtitle>:null }
            <CardText>{item.description}</CardText>
        </CardBody>
    </Card>
    </>
}}

function Home(props) {
    return (
        <div className='conatiner'>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.isLoading} errorMess={props.errorMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.isLoading} errorMess={props.errorMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} isLoading={props.isLoading} errorMess={props.errorMess}/>
                </div>
            </div>
        </div>
    )
}

export default Home
