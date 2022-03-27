import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class ImgCarouselComponent extends Component {
  render() {
    return (
      <div>
          <Carousel dynamicHeight={false}>
            <div>
                <img src={require('../images/slider-1.jpg').default} style={{'height' : '400px', "objectFit": 'cover'}}/>
            </div>
            <div>
                <img src={require('../images/slider-2.jpg').default} style={{'height' : '400px',"objectFit": 'cover'}}/>
            </div>
            <div>
                <img src={require('../images/slider-3.jpg').default} style={{'height' : '400px',"objectFit": 'cover'}}/>
            </div>
        </Carousel>
      </div>
    );
  }
}

export default ImgCarouselComponent;