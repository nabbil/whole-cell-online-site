import React, { Component } from 'react'

import BgVideo from '../../../assets/services/repair.webm'
import '../../../css/body/services/repair.css'
import IntroductionSection from '../IntroductionSection'

class Repair extends Component {
    render() {
        return (
            <div>
                <IntroductionSection 
                    sectionName=""
                    bgImg="repair-banner-bgimg"
                    wrapper=""
                />
                <div className="repair">
                    <video autoplay="autoplay" muted loop="loop" id="video">
                    <source src={BgVideo} type="video/webm" />
                    Your browser does not support HTML5 video.
                    </video>
                    <div className="wrapper">
                        <div className="content">
                            <h1 data-aos="fade-right" data-aos-offset="55" data-aos-delay="200" data-aos-duration="1000">
                                Repair
                            </h1>
                            <p data-aos="fade-left" data-aos-offset="80" data-aos-delay="800" data-aos-duration="1000">
                                Our aim is to offer outstanding services straight to your home or to your office to conduct repair works or troubleshoot your smart phones. For us, the repair work is not just about finding the fault and fixing it, it is about quality parts that are made to last long. We make sure that each of the parts used for repairing are brand new and of the highest quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Repair