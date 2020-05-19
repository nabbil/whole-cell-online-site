import React, { Component } from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import '../../../css/body/header/navigationBar.css'
import {Link} from 'react-router-dom'
import Login from '../../auth/login/Login'

class NavigationBar extends Component {
    constructor(props){
        super(props)
        const token=localStorage.getItem("token")

        let loggedin = true
        if(token==null){
            loggedin = false
        }
        this.loginElement = React.createRef()
        this.state = {
            isNavbarCollapsed: true,
            loginToggle: false,
            loggedin
            
        }
    }

    onLoginToggle = () => {
        this.setState({
            loginToggle: !this.state.loginToggle
        })

        this.loginElement.current.onCloseModal()
    }

    onLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    componentDidMount() {
        document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY < 70 ? "navbar-body" : "navbar-body-scrolled";
          const listbackgroundcolor = window.scrollY < 70 ? "list-bg-color" : "remove-list-bg-color";

          this.setState({ 
              navbar_body: backgroundcolor ,
              list_bg_color: listbackgroundcolor
            });
        });
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

    _onNavbarToggleClick = () => {
        this.setState({
            isNavbarCollapsed: !this.state.isNavbarCollapsed
        })
     }
     _getNavbarToggleIcon() {
        return this.state.isNavbarCollapsed ? (
            <i className="fas fa-bars"></i>
        ) : (
            <i className="fas fa-times"></i>
        );
    }
    render() {
        return (
            <div className={this.props.state}>
                <Navbar className="header-navbar" collapseOnSelect expand="md" variant="dark" fixed="top">
                        <Nav>
                            <Navbar.Brand className="logo" href="/whole-cell-online-site/">Whole Cell<span> Accessories</span></Navbar.Brand>
                        </Nav>
                        <Navbar.Toggle children={this._getNavbarToggleIcon()} onClick={this._onNavbarToggleClick}
                         className="toggle" aria-controls="responsive-navbar-nav" /> 
                        <Navbar.Collapse className="list" id="responsive-navbar-nav" >
                            <Nav className="ml-auto">
                                <Navbar.Brand className="date" >{this.getDate()}</Navbar.Brand>
                                {
                                    this.state.loggedin ? 
                                    
                                <Navbar.Brand className="login" onClick={() => this.onLogout()}><i className="fas fa-user"></i>&nbsp;Logout</Navbar.Brand>
                                : 
                                
                                <Navbar.Brand className="login" onClick={() => this.onLoginToggle()}><i className="fas fa-user"></i>&nbsp;Login</Navbar.Brand>
                                }
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
                <Login 
                        loginToggle={this.state.loginToggle}
                        onLoginToggle={() => this.onLoginToggle()}
                        ref={this.loginElement}
                    />
            </div>
        )
    }
}

export default NavigationBar
