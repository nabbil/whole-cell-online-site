import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import '../../../css/body/about/about.css'

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="bgimg">
                    <div className="content">
                        <Container fluid>
                            <Row>
                                <Col>
                                    <span className="heading">
                                        About
                                    </span>
                                </Col>
                            </Row> 
                            <Row className="sub-content">
                                <Col md={4}>
                                    <Row className="accessories">
                                        <Col xs={4} sm={2} md={4} xl={2}>
                                            <div>
                                                <i className="fas fa-keyboard icon"></i>
                                            </div>
                                        </Col>
                                        <Col xs={8} sm={10} md={8} xl={10}> 
                                            <h5>
                                                Accessories
                                            </h5>  
                                            <p>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione eos soluta dolorum excepturi adipisci, nihil id labore, recusandae aperiam ducimus at quia sit officia. Eum.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={4}>
                                    <Row className="repair">
                                        <Col xs={4} sm={2} md={4} xl={2}>
                                            <div>
                                                <i className="fas fa-tools icon"></i>

                                            </div>
                                        </Col>
                                        <Col xs={8} sm={10} md={8} xl={10}>  
                                            <h5>
                                                Repair
                                            </h5> 
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repudiandae, unde tenetur atque quisquam alias nemo laboriosam nisi amet! Eligendi voluptas harum laborum libero in.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={4}>
                                    <Row className="activation">
                                        <Col xs={4} sm={2} md={4} xl={2}>
                                            <div>
                                                <i className="fas fa-mobile icon"></i>
                                            </div>
                                        </Col>
                                        <Col xs={8} sm={10} md={8} xl={10}>  
                                            <h5>
                                                Activation
                                            </h5> 
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta unde sint iusto! Alias rem nobis id quia doloremque similique porro excepturi voluptatum, modi eaque assumenda?
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
