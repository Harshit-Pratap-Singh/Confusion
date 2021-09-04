import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

export default class DishDetail extends Component {
    constructor(props){
        super(props);
    }
  
    renderComments(comments) {
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
    render() {
        if(this.props.dish){
        return (
            <div className='container'>
            <div className="row">
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>
                                {this.props.dish.name}
                            </CardTitle>
                            <CardText>
                                {this.props.dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md-5 m-1'>


                    {this.renderComments(this.props.dish.comments)}



                </div>
            </div>
            </div>
        )
        }
        else return <div></div>
    }
}
