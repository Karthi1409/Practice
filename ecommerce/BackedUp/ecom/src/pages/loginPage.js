import React, { Component } from 'react';
import HeaderComp from '../components/headerComp';
import LoginComp from '../components/loginComp';
import TermsComp from '../components/termsComp';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: {
                email: '',
                password: ''
            },
            error: {
                email: false,
                password: false
            }
        }
    }

    onReceive = (name, value) => {
        this.setState({
            login: { ...this.state.login, [name]: value }
        })
        // console.log(name);
        // console.log(value);
        console.log(this.state.login);

    }

    onReceiveError = (value, name) => {
        this.setState({
            error: { ...this.state.error, [name]: value }

        })
        // console.log(value);
        // console.log(name);
        console.log(this.state.error.email);
    }

    render() {
        return (
            <div>
                <HeaderComp></HeaderComp>
                <LoginComp {...this.state} onReceiveMail={this.onReceive} onReceivePa={this.onReceiveError}></LoginComp>
                <TermsComp></TermsComp>
            </div>
        );
    }
}

export default LoginPage;