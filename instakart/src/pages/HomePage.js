import React, { Component } from 'react';
import HeaderComp from '../components/headercomp';
import ImgCarouselComp from '../components/imgcarousel';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import LatestComp from '../components/latestcomp'
import LoaderComp from '../components/loader';
import ProductComp from '../components/product';
import ProductInfoComp from '../components/product_info';
import FooterComp from '../components/footer';
import ProductPreviewComp from '../components/productpreviewcomp';


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayMessage: 'Latest Products',
            latestProducts: [],
            preview: {
                topSelling: [],
                recentlyViewed: [],
                topNew: []
            }
        }
    }


    componentDidMount() {
        const url = "https://shop143.herokuapp.com/telebuy/api/products/latest"
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
        const url2 = "https://shop143.herokuapp.com/telebuy/api/product/preview"
        axios.get(url2)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    preview: response.data
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
                <ImgCarouselComp></ImgCarouselComp>
                <LatestComp {...this.state}>
                    {
                        this.state.latestProducts.length === 0 ?
                            <LoaderComp size={{ 'width': 120, 'height': 120 }}></LoaderComp> :
                            <ProductComp {...this.state}></ProductComp>
                    }   
                </LatestComp>
                <ProductInfoComp></ProductInfoComp>
                <div className="product-widget-area">
                    <div className="zigzag-bottom"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="single-product-widget">
                                    <h2 className="product-wid-title">Top Sellers</h2>
                                    <NavLink to={"/shop/"}>
                                        <i className="wid-view-more"> View All</i>
                                    </NavLink>
                                    {this.state.preview.topSelling.length === 0 ?
                                        <LoaderComp size={{ 'width': 75, 'height': 75 }}></LoaderComp> :
                                        <ProductPreviewComp preview={this.state.preview.topSelling}></ProductPreviewComp>
                                    }
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-product-widget">
                                    <h2 className="product-wid-title">Recently Viewed</h2>
                                    <NavLink to={"/shop/"}>
                                        <i className="wid-view-more"> View All</i>
                                    </NavLink>
                                    {this.state.preview.recentlyViewed.length === 0 ?
                                        <LoaderComp size={{ 'width': 75, 'height': 75 }}></LoaderComp> :
                                        <ProductPreviewComp preview={this.state.preview.recentlyViewed}></ProductPreviewComp>
                                    }

                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="single-product-widget">
                                    <h2 className="product-wid-title">Top New</h2>
                                    <NavLink to={"/shop/"}>
                                        <i className="wid-view-more"> View All</i>
                                    </NavLink>
                                    {this.state.preview.topNew.length === 0 ?
                                        <LoaderComp size={{ 'width': 75, 'height': 75 }}></LoaderComp> :
                                        <ProductPreviewComp preview={this.state.preview.topNew}></ProductPreviewComp>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterComp></FooterComp>
            </div>
        );
    }
}

export default HomePage;