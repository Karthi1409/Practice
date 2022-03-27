import React, { Component } from 'react';
import FooterComp from '../components/footer';
import HeaderComp from '../components/headercomp';
import LatestComp from '../components/latestcomp';
import LoaderComp from '../components/loader';
import ProductComp from '../components/product';
import axios from 'axios';

class ShoppingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMessage: 'Latest Smartphones',
            products: [],
            latestProducts: []
        }
    }

    componentDidMount() {
        const url = "https://shop143.herokuapp.com/telebuy/api/products"
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    latestProducts: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <HeaderComp></HeaderComp>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-bit-title text-center">
                                    <h2>Smartphones</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LatestComp {...this.state}>
                    {
                        this.state.latestProducts.length === 0 ?
                            <LoaderComp size={{ 'width': 120, 'height': 120 }}></LoaderComp> :
                            <ProductComp {...this.state}></ProductComp>
                    }
                </LatestComp>
                <FooterComp></FooterComp>
            </div>
        );
    }
}

export default ShoppingPage;