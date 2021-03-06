import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Col, Input, Label, Row } from 'reactstrap';
import { actions,Form, Control, Errors } from 'react-redux-form';

const required=(val)=> (val) && val.length;
const maxLength=(len)=> (val)=> !(val) || (val.length<=len);
const minLength=(len)=> (val)=> (val) && (val.length>len);
const isNum=(val)=> !isNaN(Number(val));
const validEmail=val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class Contact extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(values) {
        console.log(values.firstName);
        alert("Current state>>>" + JSON.stringify(values));
        this.props.postFeedback(values.firstName , values.lastName,values.telNum ,values.email, values.agree, values.contactType, values.message);
        this.props.resetFeedbackForm();

    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Send us your feeback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model='feedback' onSubmit={values => this.handleSubmit(values) }>
                            <Row className='form-group'>
                                <Label htmlFor='firstName' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model='.firstName'
                                        className='form-control'
                                        name='firstName'
                                        id='firstName'
                                        placeholder='First Name'
                                        validators={{
                                            required,maxLength:maxLength(15),minLength:minLength(3)
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model=".firstName"
                                        show='touched'
                                        messages={{
                                            required: "Required ",
                                            minLength: 'Must be greater than 3',
                                            maxLength: 'Must be less than 15',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='lastName' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model='.lastName'
                                        className='form-control'
                                        name='lastName'
                                        id='lastName'
                                        placeholder='Last Name'
                                        validators={{
                                            required,maxLength:maxLength(15),minLength:minLength(3)
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model=".lastName"
                                        show='touched'
                                        messages={{
                                            required: "Required ",
                                            minLength: 'Must be greater than 3',
                                            maxLength: 'Must be less than 15',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='telNum' md={2}>Tel.</Label>
                                <Col md={10}>
                                    <Control.text model='.telNum'
                                        className='form-control'
                                        name='telNum'
                                        id='telNum'
                                        placeholder='Tel. number'
                                        validators={{
                                            required,maxLength : maxLength(15),minLength : minLength(3),isNum
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model=".telNum"
                                        show='touched'
                                        messages={{
                                            required: "Required ",
                                            minLength: 'Must be greater than 3 ',
                                            maxLength: 'Must be less than 15 ',
                                            isNum:'Must be Number',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model='.email'
                                        className='form-control'
                                        name='email'
                                        id='email'
                                        placeholder='Email'
                                        validators={{
                                            required,validEmail
                                        }}
                                    />
                                     <Errors
                                        className='text-danger'
                                        model=".telNum"
                                        show='touched'
                                        messages={{
                                            required: "Required ",
                                            validEmail: "Invalid Email Address"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className='form-group'>
                                        <Label check>
                                            <Control.checkbox model='.agree'
                                                className='form-control'
                                                name='agree'
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>                      
                                    </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                <Control.select model='.contactType'
                                    className='form-control' 
                                    name="contactType"
                                        >
                                        <option>Tel.</option>
                                        <option>E-mail</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                <Control.textarea model='.message'
                                    className='form-control'
                                        name='message'
                                        id='message'
                                        placeholder='Message'
                                        rows='12'
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type='submit' color='primary'>
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;