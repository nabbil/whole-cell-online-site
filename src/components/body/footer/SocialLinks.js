import React, { Component } from 'react'
import {Container,Row, Col} from 'react-bootstrap'

import '../../../css/body/footer/socialLinks.css'

class SocialLinks extends Component {
    render() {
        return (
            <div className="social-links">
                <div className="bgimg">     
                    <div className="image-wrapper">
                        <div className="content">
                           <Container fluid className="wrapper">
                               <h1 className="text-center" data-aos="fade-right" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                   Social Links
                                </h1>
                                <Row className="row align-items-center">
                                    <Col className="text-center">
                                        <a href='https://www.youtube.com'>
                                            <i className="fab fa-youtube fa-3x" data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"></i>
                                        </a>
                                    </Col>
                                    <Col className="text-center">
                                        <a href='https://www.instagram.com'>
                                            <i className="fab fa-instagram fa-3x" data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"></i>
                                        </a>
                                    </Col>
                                    <Col className="text-center">
                                        <a href='https://www.google.com'>
                                            <i className="fab fa-google fa-3x" data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"></i>
                                        </a>
                                    </Col>
                                    <Col className="text-center">
                                        <a href='https://www.facebook.com'>
                                            <i className="fab fa-facebook-f fa-3x" data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"></i>
                                        </a>
                                    </Col>
                                </Row>  
                                <Row className="row align-items-center">
                                    <Col className="text-center">
                                        <a href='https://www.snapchat.com'>
                                            <i className="fab fa-snapchat-ghost fa-3x" data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"></i>
                                        </a>
                                    </Col>
                                    <Col className="text-center">
                                        <a href='https://www.pinterest.com'>
                                            <i className="fab fa-pinterest-p fa-3x" data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000"></i>
                                        </a>
                                    </Col>
                                    <Col className="text-center">
                                    </Col>
                                    <Col className="text-center">
                                    </Col>
                                </Row>  
                                <Row className="row align-items-center">
                                    <Col className="text-center">
                                    </Col>
                                    <Col className="text-center">
                                    </Col>
                                    <Col className="text-center">
                                    </Col>
                                    <Col className="text-center">
                                    </Col>
                                </Row>   
                            </Container> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialLinks
