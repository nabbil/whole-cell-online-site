import React, { Component } from 'react'

import {Row, Col} from 'react-bootstrap'
import '../../../css/body/services/services.css'

class Services extends Component {
    render() {
        return (
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
        )
    }
}

export default Services
