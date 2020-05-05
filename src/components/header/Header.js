import React, { Component } from 'react'

import BgVideo from '../../assets/bg.mp4'
import NavigationBar from './NavigationBar'
import '../../css/header/header.css'

class Header extends Component {
    render() {
        return (
            <div className="header-body">
                <video autoplay="autoplay" muted loop="loop" id="header-video">
                <source src={BgVideo} type="video/mp4" />
                Your browser does not support HTML5 video.
                </video>
                <div className="header-wrapper">
                    <div className="header-content">
                        <h1>Whole Cell Accessories</h1>
                        <h2>Open To Public</h2>
                        <h2>Never Pay Retail!!!</h2>
                    </div>
                </div>
                {/* <NavigationBar /> */}
            </div>
        )
    }
}

export default Header
