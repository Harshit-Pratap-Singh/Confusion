import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Col, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            telNum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched:{
                firstName: '',
                lastName: '',
                telNum: '',
                email: '',
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);

    }
    handleInputChange(event) {
        var t = event.target;
        const val = t.type === 'checkbox' ? t.checked : t.value;
        const name = t.name;
        this.setState({
            [name]: val
        });
    }
    handleSubmit(event) {
        console.log("Current state>>>" + JSON.stringify(this.state));
        alert("Current state>>>" + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur=(field)=>(event)=>{
            this.setState({
                touched:{
                    ...this.state.touched,
                    [field]: true,
                }
            })
    }

    validate({firstName,lastName,email,telNum}){
        const errors={
            firstName: '',
            lastName: '',
            telNum: '',
            email: '',
        }
        if (this.state.touched.firstName && firstName.length < 3)
            errors.firstName = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstName && firstName.length > 10)
            errors.firstName = 'First Name should be <= 10 characters';

        if (this.state.touched.lastName && lastName.length < 3)
            errors.lastName = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastName && lastName.length > 10)
            errors.lastName = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telNum && !reg.test(telNum))
            errors.telNum = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && email.split('@').length !== 2)
            errors.email = 'Email should contain a @';
        return errors;
    }
    render() {
        const errors=this.validate(this.state);
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
                        <Form>
                            <FormGroup row>
                                <Label htmlFor='firstName' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type='text'
                                        name='firstName'
                                        id='firstName'
                                        value={this.state.firstName}
                                        placeholder='First Name'
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('firstName')}
                                        valid={errors.firstName === ''}
                                        invalid={errors.firstName !== ''}
                                    />
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastName' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text'
                                        name='lastName'
                                        id='lastName'
                                        value={this.state.lastName}
                                        placeholder='Last Name'
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('lastName')}
                                        valid={errors.lastName === ''}
                                        invalid={errors.lastName !== ''}

                                    />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telNum' md={2}>Tel.</Label>
                                <Col md={10}>
                                    <Input type='tel'
                                        name='telNum'
                                        id='telNum'
                                        value={this.state.telNum}
                                        placeholder='Tel. number'
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('telNum')}
                                        valid={errors.telNum === ''}
                                        invalid={errors.telNum !== ''}
                                    />
                                    <FormFeedback>{errors.telNum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type='email'
                                        name='email'
                                        id='email'
                                        value={this.state.email}
                                        placeholder='Email'
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('email')}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                    />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name='agree'
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange}

                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type='select' name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange} >
                                        <option>Tel.</option>
                                        <option>E-mail</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type='textarea'
                                        name='message'
                                        id='message'
                                        value={this.state.message}
                                        placeholder='Message'
                                        rows='12'
                                        onChange={this.handleInputChange}

                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type='submit' color='primary'>
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;