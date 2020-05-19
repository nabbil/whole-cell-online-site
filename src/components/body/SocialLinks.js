import React, { Component } from 'react'
import {Container,Row, Col} from 'react-bootstrap'

import '../../css/body/socialLinks.css'

class SocialLinks extends Component {
    render() {
        return (
            <div className="social-links">
                <div className="bgimg">     
                    <div className="image-wrapper">
                        <div className="content">
                            <h1 className="text-center" data-aos="fade-right" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                Social Links
                            </h1>
                            <Row className="row align-items-center">
                                <Col md={3} xs={4} className="col text-center">
                                    <a href='https://www.youtube.com'>
                                        <i className="fab fa-youtube icon" data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"></i>
                                    </a>
                                </Col>
                                <Col md={3} xs={4} className="col text-center">
                                    <a href='https://www.instagram.com'>
                                        <i className="fab fa-instagram icon" data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"></i>
                                    </a>
                                </Col>
                                <Col md={3} xs={4} className="col text-center">
                                    <a href='https://www.google.com'>
                                        <i className="fab fa-google icon" data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"></i>
                                    </a>
                                </Col>
                                <Col md={3} xs={4} className="col text-center">
                                    <a href='https://www.facebook.com'>
                                        <i className="fab fa-facebook-f icon" data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"></i>
                                    </a>
                                </Col>
                                <Col md={3} xs={4} className="col text-center">
                                    <a href='https://www.snapchat.com'>
                                        <i className="fab fa-snapchat-ghost icon" data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"></i>
                                    </a>
                                </Col>
                                <Col md={3} xs={4} className="col text-center">
                                    <a href='https://www.pinterest.com'>
                                        <i className="fab fa-pinterest-p icon" data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"></i>
                                    </a>
                                </Col>
                            </Row>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialLinks
