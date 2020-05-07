import React, { Component } from 'react'

import {Row, Col} from 'react-bootstrap'
import '../../../css/body/services/services.css'

class Services extends Component {
    render() {
        return (
            <div className="services">
                <div className="bgimg">
                    <Row className="content">
                        <Col className="acc-col col">
                        Accessories
                        </Col>
                        <Col className="rep-col col">
                        Repair
                        </Col>
                        <Col className="act-col col">
                        Activation
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Services
