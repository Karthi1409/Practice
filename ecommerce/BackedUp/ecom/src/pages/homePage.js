import React, { Component } from 'react';
import ContentComp from '../components/contentComp';
import HeaderComp from '../components/headerComp';
import CarouselComp from '../components/carouselComp';
import DealsComp from '../components/dealsComp';
import axios from 'axios';
import TermsComp from '../components/termsComp';
// import TopDealsComp from '../components/topdealsComp';
// import SecondDealsComp from '../components/seconddealsComp';
// import ThirdDealsComp from '../components/thirddealsComp';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dealsList: []
        }
    }

    componentDidMount() {
        const url = "https://reqres.in/api/users?page=2";
        axios.get(url)
            .then((response) => {
                // console.log(response);
                this.setState({
                    dealsList: response.data.data
                })
                // console.log(this.state.dealsList);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <HeaderComp></HeaderComp>
                <ContentComp></ContentComp>
                <CarouselComp></CarouselComp>
                <DealsComp {...this.state}></DealsComp>
                <TermsComp></TermsComp>
                {/* <TopDealsComp></TopDealsComp>
                <SecondDealsComp></SecondDealsComp>
                <ThirdDealsComp></ThirdDealsComp> */}
            </div>
        );
    }
}

export default HomePage;