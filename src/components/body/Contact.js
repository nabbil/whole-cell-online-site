import React, { Component } from 'react'
import {Container,Row, Col, Form, Button} from 'react-bootstrap'

import '../../css/body/contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="bgimg">     
                     <div className="image-wrapper">
                        <div className="content">
                            <h1>Contact</h1>
                            <h5>KEEP IN TOUCH</h5>
                            <Row>
                                <Col>
                                    <p>TEL.: +7 (781) 503-1810</p>
                                    <p>500 UNICORN PARK DR, 21ST FLOOR <br/> WOBURN, MA 01801, UNITED STATES</p>
                                    <p>info@ouraddress.com <br /> www.ouraddress.com</p>
                                    <p>
                                        <a href='https://www.youtube.com'>
                                            <i className="fab fa-youtube icon"></i>
                                        </a>
                                        <a href='https://www.instagram.com'>
                                            <i className="fab fa-instagram icon"></i>
                                        </a>
                                        <a href='https://www.google.com'>
                                            <i className="fab fa-google icon"></i>
                                        </a>
                                        <a href='https://www.facebook.com'>
                                            <i className="fab fa-facebook-f icon"></i>
                                        </a>
                                        <a href='https://www.snapchat.com'>
                                            <i className="fab fa-snapchat-ghost icon"></i>
                                        </a>
                                        <a href='https://www.pinterest.com'>
                                            <i className="fab fa-pinterest-p icon"></i>
                                        </a>
                                    </p>
                                </Col>
                                <Col>
                                    {/* <Form>
                                        <Form.Group controlId="contactMessage">
                                            <Form.Control type="name" placeholder="Name" />
                                            <Form.Control type="email" placeholder="Email" />
                                            <br />
                                            <Form.Control as="textarea" rows="3" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form> */}
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
