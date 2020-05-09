import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody,
    Form, Input, FormGroup, Label } from 'reactstrap';

import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)
        // const token=localStorage.getItem("token")

        let loggedin = false
        // if(token==null){
        //     loggedin = false
        // }

        this.state = {
            username: '',
            password: '',
            loggedin,
            error: ''
        }
        this.onChange = this.onChange.bind(this)
    }

    onCloseModal = () => {
        this.setState({
            username: '',
            password: '',
            error: ''

        })
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginHandler = () => {
        const {username, password} = this.state

        if(username === 'admin' && password === '123') {
            localStorage.setItem("token", "daygcfjadsfjhabaksjdhk")
            this.props.onLoginToggle()
            this.setState({
                loggedin: true,
                username: '',
                password: '',
                error: ''
            })
            window.location.reload()
        }

        else{
            this.setState({
                loggedin: false,
                error: 'username or password is incorrect'
            })
        }
    }

    render() {
        // if(this.state.loggedin){
        //     return <Redirect to="/#/" />
        // }
        return (
            <div>
                {(this.props.loginToggle) ? 
                <Modal 
                isOpen={true} 
                toggle={() => this.props.onLoginToggle()} 
                centered
                >
                    <ModalHeader toggle={() => this.props.onLoginToggle()} style={{borderBottom: 0}}></ModalHeader>
                    <ModalBody cssModule={{'modal-body': 'text-center'}} style={{marginBottom: '50px'}}>
                        <Form style={{paddingLeft: '50px', paddingRight: '50px'}}>
                                <h5>Login</h5>
                                <br />
                                <Input type="text" placeholder="Username(admin)" value={this.state.username} name="username" onChange={this.onChange} />
                                <br />
                                <Input type="password" placeholder="Password(123)" value={this.state.password} name="password" onChange={this.onChange}/>
                                <br />
                                <Button onClick={() => this.loginHandler()}>Login</Button>
                            {this.state.error !== '' ? 
                            <div>
                                <br />
                                <Label style={{color: 'red'}}>{this.state.error}</Label>
                            </div> : ''    
                        }
                        </Form>
                    </ModalBody>
                </Modal> : null
            }
                
            </div>
        )
    }
}

export default Login
