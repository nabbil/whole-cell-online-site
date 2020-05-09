import React, { Component } from 'react'


import BgVideo from '../../../assets/services/accessories_bg.mp4'
import '../../../css/body/services/accessories.css'

class Accessories extends Component {
    render() {
        return (
            <div>
                <div className="accessories">
                    <video autoplay="autoplay" muted loop="loop" id="video">
                    <source src={BgVideo} type="video/mp4" />
                    Your browser does not support HTML5 video.
                    </video>
                    <div className="wrapper">
                        <div className="content">
                            <h1 data-aos="fade-right" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                Accessories
                            </h1>
                            <p data-aos="fade-left" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                                we offer wide range of Mobile phone Accessories such as Bluetooth Handsfree, Battery Power Packs, Mobile Cases & Covers, Mobile Chargers, Mobile Speakers and Stylus Wired Headsets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accessories
