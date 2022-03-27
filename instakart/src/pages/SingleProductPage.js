import React, { Component } from 'react';
import FooterComp from '../components/footer';
import HeaderComp from '../components/headercomp';

class SingleProductPage extends Component {
    render() {
        return (
            <div>
                <HeaderComp></HeaderComp>
                <FooterComp></FooterComp>
            </div>
        );
    }
}

export default SingleProductPage;