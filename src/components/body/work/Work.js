import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import '../../../css/body/work/work.css'

class Work extends Component {
    render() {
        return (
            <div className="work">
                <div className="bgimg">
                    <div className="content">
                        <Container fluid>
                            <Row>
                                <Col className="text-center">
                                    <h4 className="heading">
                                        <span>How</span> We Work
                                    </h4>
                                </Col>
                            </Row> 
                            <Row className="sub-content">
                                <Col sm={6} md={3}  className="text-center">
                                    <div className="circle">
                                        ONE ON ONE SERVE
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, atque perferendis sint, sit consectetur nulla rerum nemo quisquam ab ducimus, fugit quasi quos dolorum necessitatibus.
                                    </div>

                                </Col>
                                <Col sm={6} md={3}>
                                    <div className="circle">
                                        TRY BEFORE YOU BUY
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae molestiae voluptatibus labore adipisci? Similique ad cupiditate harum deleniti consectetur optio hic sit pariatur saepe veniam?
                                    </div>
                                    
                                </Col>
                                <Col sm={6} md={3}>
                                    <div className="circle">
                                        PRICE DISCUSSION
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum voluptatum nostrum suscipit sunt consequatur, eligendi dolore, distinctio saepe, ab necessitatibus odit sit repellendus totam.
                                    </div>
                                    
                                </Col>
                                <Col sm={6} md={3}>
                                    <div className="circle">
                                        CUSTOMER SERVICE
                                    </div>
                                    <div className="description">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis facilis suscipit earum laborum nesciunt molestiae doloremque exercitationem id deleniti, iste, et nemo amet quisquam!
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work
