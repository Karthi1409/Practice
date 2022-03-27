import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class ImgCarouselComp extends Component {
    render() {
        return (
            <div>
                <Carousel infiniteLoop useKeyboardArrows autoPlay>
                    <div>
                        <img src={require('../images/h4-slide.png').default} style={{ 'height': '500px', "objectFit": 'cover'}} alt="img" />
                    </div>
                    <div>
                        <img src={require('../images/h4-slide2.png').default} style={{ 'height': '500px', "objectFit": 'cover' }} alt="img" />
                    </div>
                    <div>
                        <img src={require('../images/h4-slide3.png').default} style={{ 'height': '500px', "objectFit": 'cover' }} alt="img" />
                    </div>
                    <div>
                        <img src={require('../images/h4-slide4.png').default} style={{ 'height': '500px', "objectFit": 'cover' }} alt="img" />
                    </div>
                    <div>
                        <img src={require('../images/h4-slide7.png').default} style={{ 'height': '500px', "objectFit": 'cover' }} alt="img" />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default ImgCarouselComp;



