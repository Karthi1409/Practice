import React, { Component } from 'react';
import HeaderComp from '../components/headerComp';
import SignupComp from '../components/signupComp';
import TermsComp from '../components/termsComp';

class SignupPage extends Component {
    render() {
        return (
            <div>
                <HeaderComp></HeaderComp>
                <SignupComp></SignupComp>
                <TermsComp></TermsComp>
            </div>
        );
    }
}

export default SignupPage;