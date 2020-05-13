import React, { Component } from 'react'
import {Container,Row, Col} from 'react-bootstrap'

import '../../../css/body/footer/joinTeam.css'

class JoinTeam extends Component {
    render() {
        return (
            <div className="join-team">
                <div className="bgimg">     
                     <div className="image-wrapper">
                        <div className="content">
                            <Container fluid>
                                <h1 data-aos="fade-right" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                    Join Our Team
                                </h1>
                                <p data-aos="fade-left" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nulla aliquid id sunt culpa ipsum obcaecati fuga officia minima aliquam laboriosam ipsa odit neque, explicabo sequi, alias in rerum atque?
                                </p>
                            </Container>
                            <div className="wrapper">
                                <Row className="row">
                                    <Col className="col text-center">
                                        <h5 data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                            We Fix Phones
                                        </h5>
                                    </Col>
                                    <Col className="col text-center">
                                        <h5 data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                            We Sell Accessories
                                        </h5>
                                    </Col>
                                    <Col className="col text-center">
                                        <h5 data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                            We Activate Phones
                                        </h5>
                                    </Col>
                                </Row> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JoinTeam
