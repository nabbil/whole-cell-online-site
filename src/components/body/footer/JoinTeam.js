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
                             <div></div>
                             <div className="sub-content">
                                 <Container fluid>
                                    <span>
                                    <h1 data-aos="fade-right" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                        Join Our Team
                                    </h1>
                                    <p data-aos="fade-left" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat iusto, molestias laborum, at corporis ipsa minima temporibus nemo aliquid illo cum. Enim sint aspernatur ipsa recusandae, neque quas harum necessitatibus perspiciatis explicabo facere, temporibus quod, nesciunt exercitationem sed. Voluptas doloremque, facere enim repudiandae vero earum voluptate? Facere, assumenda aliquam.
                                    </p>
                                    </span>
                                 </Container>
                             </div>
                             <div className="bottom-content">
                             <Container fluid className="wrapper">
                                {/* <h1 className="text-center" data-aos="fade-right" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                   Our Specialties
                                </h1> */}
                             <Row className="row align-items-center">
                                    <Col className="text-center">
                                        <h5 data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                            We Fix Phones
                                        </h5>
                                    </Col>
                                    <Col className="text-center">
                                        <h5 data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                            We Sell Accessories
                                        </h5>
                                    </Col>
                                    <Col className="text-center">
                                        <h5 data-aos="fade-up" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                            We Activate Phones
                                        </h5>
                                    </Col>
                                </Row> 
                            </Container>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JoinTeam
