import React, { Component } from 'react'

import {Row, Col} from 'react-bootstrap'
import '../../../css/body/client/client.css'
import CustomerReviews from './customerReviews/CustomerReviews'
import StaffTestimonials from './StaffTestimonials'
import BeTheBoss from './BeTheBoss'

class Client extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
        this.customerReviews = React.createRef()
        this.staffTestimonial = React.createRef()
        this.beTheBoss = React.createRef()
     }

     scrollToCustomerReviews = (event) => {
        if(this.customerReviews.current){
            this.customerReviews.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }
    scrollToStaffTestimonial = (event) => {
        if(this.staffTestimonial.current){
            this.staffTestimonial.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }
    scrollToBeTheBoss = (event) => {
        if(this.beTheBoss.current){
            this.beTheBoss.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }

    render() {
        return (
            <div>
                <div className="client">
                    <div className="bgimg">
                        <Row className="content">
                            <Col md={4} xs={12} className="cr-col col" onClick={this.scrollToCustomerReviews}>
                            Customer Reviews
                            </Col>
                            <Col md={4} xs={12} className="st-col col" onClick={this.scrollToStaffTestimonial}>
                            Franchise/Staff Testimonials
                            </Col>
                            <Col md={4} xs={12} className="btb-col col" onClick={this.scrollToBeTheBoss}>
                            Be The Boss
                            </Col>
                        </Row>
                    </div>
                </div>
               <section ref={this.customerReviews}>
                    <CustomerReviews />
               </section>
               <section ref={this.staffTestimonial}>
                   <StaffTestimonials />
               </section>
               <section ref={this.beTheBoss}>
                   <BeTheBoss />
               </section>
            </div>
        )
    }
}

export default Client
