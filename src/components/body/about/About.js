import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import '../../../css/body/about/about.css'

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="bgimg">
                    <div className="content">
                        <Container>
                            <Row>
                                <Col>
                                    <span className="heading">
                                        About
                                    </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi doloribus hic tempora in asperiores quia expedita ipsum minima vel possimus, ipsa accusamus voluptas repellat, reiciendis consequuntur eos minus eum.</Col>
                            </Row>
                            <Row>
                                <Col>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, numquam?</Col>
                                <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quisquam?</Col>
                                <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, enim.</Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
