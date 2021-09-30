import React, { Component } from 'react'
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Loading from './Loading';

const required = (val) => (val) && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
        this.setShow = this.setShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    setShow = () => {
        this.setState({ show: !this.state.show })
        console.log(this.state.show);
    }
    handleSubmit(val) {
            this.props.addComment(this.props.dishId,val.name,val.comment,val.rating)
    }

    render() {
      return  <>
            <Button outline onClick={this.setShow}><i className="fa fa-pencil fa-lg"> Submit Comment</i></Button>
            <Modal isOpen={this.state.show} toggle={this.setShow}>
                <ModalHeader toggle={this.setShow}>Add Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                        <Row className='form-group'>
                            <Col md={12}>
                                <Label htmlFor='rating' >Rating</Label>
                                <Control.select
                                    className='form-control'
                                    model='.rating'
                                    id='rating'
                                    name='rating'
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>

                                </Control.select>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col md={12}>
                                <Label htmlFor='name' >Your Name</Label>
                                <Control.text model='.name'
                                    className='form-control'
                                    name='name'
                                    id='name'
                                    placeholder='Your Name'
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className='text-danger'
                                    show='touched'
                                    model='.name'
                                    messages={{
                                        required: 'Required ',
                                        minLength: "Must be greater than 2",
                                        maxLength: 'Must be less than or equal to 15',
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col md={12}>
                                <Label htmlFor='comment'>Comment</Label>

                                <Control.textarea
                                    className='form-control'
                                    rows={6}
                                    model='.comment'
                                    name='comment'
                                    id='comment'
                                    placeholder='Comment...'
                                />
                            </Col>
                        </Row>
                        <Button color='primary' type='submit'>Submit</Button>
                    </LocalForm>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </>

    }
}

// ////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default function DishdetailComponent (props){
    const renderComments = (comments,addComment,dishId) => {
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
                                        --{item.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(item.date)))}
                                    </div>
                                </li>

                            )
                        })}
                    </ul>
                    <CommentForm addComment={addComment} dishId={dishId}/>
                </div>
            )
        }
        else {
            return <div></div>
        }
    }
    if(props.isLoading){
        return <div className="container">
            <div className="row">
                <Loading/>
            </div>
        </div>
    }
    else if(props.errorMess){
        return <div className="container">
            <div className="row">
                <h4>{props.errorMess}</h4>
            </div>
        </div>
    }
    else if (props.dish) {
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
                        {renderComments(props.comments,props.addComment,props.dish.id)}
                    </div>

                </div>
            </div>
        )
    }
    else return <div></div>
}

