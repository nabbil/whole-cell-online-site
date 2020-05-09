import React, { Component } from 'react'

import {Row, Col} from 'react-bootstrap'
import '../../../css/body/services/services.css'
import Accessories from './Accessories'
import Repair from './Repair'
import Activation from './Activation'

class Services extends Component {
    render() {
        return (
            <div>
                <div className="services">
                    <div className="bgimg">
                        <Row className="content">
                            <Col md={4} xs={12} className="acc-col col">
                            Accessories
                            </Col>
                            <Col md={4} xs={12} className="rep-col col">
                            Repair
                            </Col>
                            <Col md={4} xs={12} className="act-col col">
                            Activation
                            </Col>
                        </Row>
                    </div>
                </div>
                <Accessories />
                <Repair />
                <Activation />
            </div>
        )
    }
}

export default Services
