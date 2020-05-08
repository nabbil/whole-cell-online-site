import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import '../../../css/body/shopWithUs/shopWithUs.css'
import Warehouse from '../../../assets/shop_with_us/warehouse.jpg'

class ShopWithUs extends Component {
    render() {
        return (
            <div className="shop-with-us">
                <div className="bgimg">
                    <div className="content">
                        <Container fluid>
                            <Row>
                                <Col className="text-center">
                                    <h4 className="heading">
                                        <span>Why</span> You Shop With Us
                                    </h4>
                                </Col>
                            </Row> 
                            <Row className="sub-content">
                                <Col sm={6} md={3}  className="text-center warehouse">
                                    {/* <img src={Warehouse}/> */}
                                    <div className="sub-heading">
                                        WareHouse
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, atque perferendis sint, sit consectetur nulla rerum nemo quisquam ab ducimus, fugit quasi quos dolorum necessitatibus.
                                    </div>

                                </Col>
                                <Col sm={6} md={3} className="text-center">
                                    <div className="acc-img">
                                        <div className="wrapper"> 
                                            <div className="sub-heading">
                                                Accessories
                                            </div>
                                            <div className="description">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae molestiae voluptatibus labore adipisci? Similique ad cupiditate harum deleniti consectetur optio hic sit pariatur saepe veniam?
                                            </div>
                                        </div>
                                    </div>
                                    
                                </Col>
                                <Col sm={6} md={3} className="text-center">
                                    <div className="rep-img">
                                        <div className="wrapper"> 
                                            <div className="sub-heading">
                                                Repair
                                            </div>
                                            <div className="description">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum voluptatum nostrum suscipit sunt consequatur, eligendi dolore, distinctio saepe, ab necessitatibus odit sit repellendus totam.
                                            </div>
                                        </div>
                                    </div>
                                    
                                </Col>
                                <Col sm={6} md={3} className="text-center">
                                    <div className="pho-img">
                                        <div className="wrapper"> 
                                            <div className="sub-heading">
                                                Phone Sales
                                            </div>
                                            <div className="description">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis facilis suscipit earum laborum nesciunt molestiae doloremque exercitationem id deleniti, iste, et nemo amet quisquam!
                                            </div>
                                        </div>
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

export default ShopWithUs
