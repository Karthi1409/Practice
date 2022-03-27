import React, { Component } from 'react';
import HeaderComp from '../components/headerComp';
import ContentComp from '../components/contentComp';
import TermsComp from '../components/termsComp';

class ApplicancePage extends Component {
    render() {
        return (
            <div>
                <HeaderComp></HeaderComp>
                <ContentComp></ContentComp>
                <TermsComp></TermsComp>
            </div>
        );
    }
}

export default ApplicancePage;