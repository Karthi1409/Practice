import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";

class CarouselComp extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            rtl: true
        };
        return (
            <div>
                <Slider className="maincarousel" {...settings}>
                    <NavLink to="/">
                        <img className="imgc" src={require("../img/Carousel/1.PNG").default} alt="imgc"></img>
                    </NavLink>
                    <NavLink to="/">
                    <img className="imgc" src={require("../img/Carousel/2.PNG").default} alt="imgc"></img>
                    </NavLink>
                    <NavLink to="/">
                    <img className="imgc" src={require("../img/Carousel/3.PNG").default} alt="imgc"></img>
                    </NavLink>
                    <NavLink to="/">
                    <img className="imgc" src={require("../img/Carousel/4.PNG").default} alt="imgc"></img>
                    </NavLink>
                </Slider>
            </div>
        );
    }
}


export default CarouselComp;