import React from 'react'
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

export default function DishDetail(props) {
    const renderComments=(comments) => {
        if (comments != null) {
            return (
                <div >
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                    {comments.map((item) => {
                        return (
                            
                                <li key={item.id}>
                                   <div className='mb-4'> {item.comment}</div>
                               <div className='mb-4'>
                                    --{item.author},{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(item.date)))}
                                </div>
                                </li>
                            
                        )
                    })}
                    </ul>
                </div>
            )
        }
        else {
            return <div></div>
        }
    }
        if(props.dish){
        return (
            <div className='container'>
             <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={props.dish.image} alt={props.dish.name} />
                        <CardBody>
                            <CardTitle>
                                {props.dish.name}
                            </CardTitle>
                            <CardText>
                                {props.dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md-5 m-1'>
                    {renderComments(props.comments)}
                </div>
            </div>
            </div>
        )
        }
        else return <div></div>
    }

