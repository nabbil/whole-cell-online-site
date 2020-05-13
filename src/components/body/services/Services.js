import React, { Component } from 'react'

import {Row, Col} from 'react-bootstrap'
import '../../../css/body/services/services.css'
import Accessories from './Accessories'
import Repair from './Repair'
import Activation from './Activation'

class Services extends Component {
    constructor(props){
        super(props)
        this.state={}
        this.accessories = React.createRef()
        this.repair = React.createRef()
        this.activation = React.createRef()
    }
    
    scrollToAccessories = (event) => {
        //.current is verification that your element has rendered
        if(this.accessories.current){
            this.accessories.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }
    scrollToRepair = (event) => {
        if(this.repair.current){
            this.repair.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }
    scrollToActivation = (event) => {
        if(this.activation.current){
            this.activation.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }
    render() {
        return (
            <div>
                <div className="services">
                    <div className="bgimg">
                        <Row className="content">
                            <Col md={4} xs={12} className="acc-col col" onClick={this.scrollToAccessories}>
                            Accessories
                            </Col>
                            <Col md={4} xs={12} className="rep-col col" onClick={this.scrollToRepair}>
                            Repair
                            </Col>
                            <Col md={4} xs={12} className="act-col col" onClick={this.scrollToActivation}>
                            Activation
                            </Col>
                        </Row>
                    </div>
                </div>
               <section ref={this.accessories}>
                    <Accessories />
               </section>
               <section ref={this.repair}>
                    <Repair />
               </section>
               <section ref={this.activation}>
                    <Activation />
               </section>
            </div>
        )
    }
}

export default Services
