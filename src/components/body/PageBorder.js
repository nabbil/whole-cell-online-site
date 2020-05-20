import React, { Component } from 'react'

import '../../css/body/pageBorder.css'

class PageBorder extends Component {
    constructor(props){
        super(props)
        this.state={
            state1: "state1"
        }
    }
    
    componentDidMount() {
        document.addEventListener("scroll", () => {
          const state2 = window.scrollY < 10 ? "state1" : "state2";

          this.setState({ 
              state1: state2
            });
        });
    }  

    
    render() {
        return (
            <div className={this.state.state1}>
                
                <div className="page-border top">
                    </div>
                    <div className="page-border bottom">
                        {
                        this.state.state1==='state1' ? 
                            <span style={{cursor: 'pointer'}} onClick={this.props.scrollToServices}><span>Scroll</span> Down</span> : 
                            <span style={{cursor: 'pointer'}} onClick={this.props.scrollToHeader}><span>To</span> Top</span>
                        }
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
                        <ul>
                            <li onClick={this.props.scrollToHeader}>
                                {
                                    this.props.headerDot ? 
                                    <i className="far fa-circle"></i> :
                                    <i className="fas fa-circle circle"></i>
                                }
                            </li>
                            <li onClick={this.props.scrollToServices}>
                                {
                                    this.props.servicesDot ? 
                                    <i className="far fa-circle"></i> :
                                    <i className="fas fa-circle circle"></i>
                                }
                            </li>
                            <li onClick={this.props.scrollToClient}>
                                {
                                    this.props.clientDot ? 
                                    <i className="far fa-circle"></i> :
                                    <i className="fas fa-circle circle"></i>
                                }
                            </li>
                            <li onClick={this.props.scrollToSocialLinks}>
                                {
                                    this.props.socialLinksDot ? 
                                    <i className="far fa-circle"></i> :
                                    <i className="fas fa-circle circle"></i>
                                }
                            </li>
                            <li onClick={this.props.scrollToJoinTeam}>
                                {
                                    this.props.joinTeamDot ? 
                                    <i className="far fa-circle"></i> :
                                    <i className="fas fa-circle circle"></i>
                                }
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }
}

export default PageBorder
