import React, { Component } from 'react'

import PageBorder from './PageBorder'
import Header from './header/Header'
import Services from './services/Services'
import Client from './client/Client'
import SocialLinks from './SocialLinks'
import JoinTeam from './JoinTeam'

class Body extends Component {
    constructor(props){
        super(props)
        this.state={
            headerDot: true,
            servicesDot: false,
            clientDot: false,
            socialLinksDot: false,
            joinTeamDot: false
        }
        this.header = React.createRef()
        this.services = React.createRef()
        this.client = React.createRef()
        this.socialLinks = React.createRef()
        this.joinTeam = React.createRef()
    } 

    
    // componentDidMount() {
    //     // console.log(document.getElementById("header").offsetTop)
    //     document.addEventListener("scroll", () => {
    //         if(window.scrollY < document.getElementById("services").offsetTop)
    //         {
        
    //             this.setState({
    //                 headerDot: true,
    //                 servicesDot: false,
    //                 clientDot: false,
    //                 socialLinksDot: false,
    //                 joinTeamDot: false
        
    //             })
    //         } 
    //         if(window.scrollY >= document.getElementById("services").offsetTop )
    //         {
    //             this.setState({
    //                 headerDot: false,
    //                 servicesDot: true,
    //                 clientDot: false,
    //                 socialLinksDot: false,
    //                 joinTeamDot: false
        
    //             })
    //         }
    //         if(window.scrollY >= document.getElementById("client").offsetTop)
    //         {
    //             this.setState({
    //                 headerDot: false,
    //                 servicesDot: false,
    //                 clientDot: true,
    //                 socialLinksDot: false,
    //                 joinTeamDot: false
        
    //             })
    //         }
    //         if(window.scrollY >= document.getElementById("socialLinks").offsetTop)
    //         {
    //             this.setState({
    //                 headerDot: false,
    //                 servicesDot: false,
    //                 clientDot: false,
    //                 socialLinksDot: true,
    //                 joinTeamDot: false
        
    //             })
    //         }
    //         if(window.scrollY >= document.getElementById("joinTeam").offsetTop)
    //         {
    //             this.setState({
    //                 headerDot: false,
    //                 servicesDot: false,
    //                 clientDot: false,
    //                 socialLinksDot: false,
    //                 joinTeamDot: true
        
    //             })
    //         }
    //     })
        
    // } 
    

    scrollToHeader = (event) => {
        //.current is verification that your element has rendered
        if(this.header.current){
            this.header.current.scrollIntoView({ 
               behavior: "smooth"
            })
        }
        
        this.setState({
            headerDot: true,
            servicesDot: false,
            clientDot: false,
            socialLinksDot: false,
            joinTeamDot: false

        })
    }
    scrollToServices = (event) => {
        //.current is verification that your element has rendered
        if(this.services.current){
            this.services.current.scrollIntoView({ 
               behavior: "smooth"
            })
        }
        this.setState({
            headerDot: false,
            servicesDot: true,
            clientDot: false,
            socialLinksDot: false,
            joinTeamDot: false

        })
    }
    scrollToClient = (event) => {
        //.current is verification that your element has rendered
        if(this.client.current){
            this.client.current.scrollIntoView({ 
               behavior: "smooth"
            })
        }
        this.setState({
            headerDot: false,
            servicesDot: false,
            clientDot: true,
            socialLinksDot: false,
            joinTeamDot: false

        })
    }
    scrollToSocialLinks = (event) => {
        //.current is verification that your element has rendered
        if(this.socialLinks.current){
            this.socialLinks.current.scrollIntoView({ 
               behavior: "smooth"
            })
        }
        this.setState({
            headerDot: false,
            servicesDot: false,
            clientDot: false,
            socialLinksDot: true,
            joinTeamDot: false

        })
    }
    scrollToJoinTeam = (event) => {
        //.current is verification that your element has rendered
        if(this.joinTeam.current){
            this.joinTeam.current.scrollIntoView({ 
               behavior: "smooth"
            })
        }
        this.setState({
            headerDot: false,
            servicesDot: false,
            clientDot: false,
            socialLinksDot: false,
            joinTeamDot: true

        })
    }
    

    
    render() {
        return (
            <div>

                <PageBorder 
                scrollToHeader={this.scrollToHeader}
                scrollToServices={this.scrollToServices}
                scrollToClient={this.scrollToClient}
                scrollToSocialLinks={this.scrollToSocialLinks}
                scrollToJoinTeam={this.scrollToJoinTeam}
                headerDot={this.state.headerDot}
                servicesDot={this.state.servicesDot}
                clientDot={this.state.clientDot}
                socialLinksDot={this.state.socialLinksDot}
                joinTeamDot={this.state.joinTeamDot}/>

                <section  id="header" ref={this.header}>
                    <Header
                        headerDot={this.state.headerDot}
                        scrollToHeader={this.scrollToHeader}
                        scrollToServices={this.scrollToServices}
                        scrollToClient={this.scrollToClient}
                        scrollToSocialLinks={this.scrollToSocialLinks}
                        scrollToJoinTeam={this.scrollToJoinTeam}
                        headerDot={this.state.headerDot}
                        servicesDot={this.state.servicesDot}
                        clientDot={this.state.clientDot}
                        socialLinksDot={this.state.socialLinksDot}
                        joinTeamDot={this.state.joinTeamDot}
                    />
                </section>

                <section id="services" ref={this.services}><Services/></section>

                <section id="client" ref={this.client}><Client/></section>

                <section id="socialLinks" ref={this.socialLinks}><SocialLinks/></section>

                <section id="joinTeam" ref={this.joinTeam}><JoinTeam/></section>
            </div>
        )
    }
}

export default Body
