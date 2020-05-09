import React, { Component } from 'react'

import BgVideo from '../../../assets/services/activation_video.mp4'
import '../../../css/body/services/activation.css'
import IntroductionSection from '../IntroductionSection'

class Activation extends Component {
    render() {
        return (
            <div>
                <IntroductionSection 
                    sectionName='Activation'
                    bgImg='repair-banner-bgimg'
                />
                <div className="activation">
                    <video autoplay="autoplay" muted loop="loop" id="video">
                    <source src={BgVideo} type="video/mp4" />
                    Your browser does not support HTML5 video.
                    </video>
                    <div className="wrapper">
                        <div className="content">
                            <h1 data-aos="fade-right" data-aos-offset="60" data-aos-delay="200" data-aos-duration="1000">
                                Activation
                            </h1>
                            <p data-aos="fade-left" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                                Activate your phone or SIM card online if you purchased it with a new wireless account, an upgrade, or added a new line.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Activation
