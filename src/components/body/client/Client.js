import React, { Component } from 'react'

import {Row, Col} from 'react-bootstrap'
import '../../../css/body/client/client.css'
import CustomerReviews from './customerReviews/CustomerReviews'
// import StaffTestimonials from './StaffTestimonials'
// import BeTheBoss from './BeTheBoss'

class Client extends Component {
    render() {
        return (
            <div>
                <div className="client">
                    <div className="bgimg">
                        <Row className="content">
                            <Col md={4} xs={12} className="cr-col col">
                            Customer Reviews
                            </Col>
                            <Col md={4} xs={12} className="st-col col">
                            Franchise/Staff Testimonials
                            </Col>
                            <Col md={4} xs={12} className="btb-col col">
                            Be The Boss
                            </Col>
                        </Row>
                    </div>
                </div>
                <CustomerReviews />
                {/* <StaffTestimonials />
                <BeTheBoss /> */}
            </div>
        )
    }
}

export default Client
