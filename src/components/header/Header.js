import React, { Component } from 'react'

import BgVideo from '../../assets/bg.mp4'
import NavigationBar from './NavigationBar'
import '../../css/header/header.css'
import ImgLogo from '../../assets/logo.png'

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            state1: "header state1"
        }
    }
    getDate = () => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var d = weekday[today.getDay()];

        if(dd<10) {
            dd = '0'+dd
        } 

        if(mm<10) {
            mm = '0'+mm
        } 

        return today = yyyy + '/' + mm + '/' + dd + ' ' + d;
    }

    componentDidMount() {
        document.addEventListener("scroll", () => {
          const state2 = window.scrollY < 10 ? "header state1" : "header state2";

          this.setState({ 
              state1: state2
            });
        });

        
    // window.addEventListener('resize', () => {
    //     const state2 = window.innerWidth < 768 ? "header state2" : "header state1";
    //     this.setState({
    //         state1: state2
    //     });
    // });
    }

    render() {
        return (
            <div className={this.state.state1}>
                <video autoplay="autoplay" muted loop="loop" id="video">
                <source src={BgVideo} type="video/mp4" />
                Your browser does not support HTML5 video.
                </video>
                <div className="wrapper">
                    <div className="content">
                        <div className="center-text">
                            <a href="/whole-cell-online-site/">
                                <img className="img-logo" src={ImgLogo}/>
                            </a>
                            <h2>Open To Public</h2>
                            <h2>Never Pay Retail!!!</h2>
                        </div>
                    </div>
                    <div className="page-border top">
                    </div>
                    <div className="page-border bottom">
                    </div>
                    <div className="page-border left border-pad">
                    </div>
                    <div className="page-border right border-pad">
                    </div>
                    <div className="page-border left">
                        <ul>
                            <li>
                                <a href='https://www.youtube.com'>
                                    <i className="fab fa-youtube icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com'>
                                    <i className="fab fa-instagram icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.google.com'>
                                    <i className="fab fa-google icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com'>
                                    <i className="fab fa-facebook-f icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.snapchat.com'>
                                    <i className="fab fa-snapchat-ghost icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.pinterest.com'>
                                    <i className="fab fa-pinterest-p icon"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="page-border right">
                    </div>
                </div>
                <NavigationBar state={this.state.state1}/>
            </div>
        )
    }
}

export default Header