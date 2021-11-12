import React, { Component } from 'react';
import './ImageGallery.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import image1 from './carousel_images/image1.jpg';
import image2 from './carousel_images/image2.jpg';
import image3 from './carousel_images/image3.jpg';
import image4 from './carousel_images/image4.jpg';
import image5 from './carousel_images/image5.jfif';
import image6 from './carousel_images/image6.jpg';
import image7 from './carousel_images/image7.jpg';

class ImageGalleryCarousels extends Component {
  render() {
    return (
      <div id="galleryContainer">
        <Carousel>
          <div>
            <img src={image1} alt="image1" />
          </div>
          <div>
            <img src={image2} alt="image2" />
          </div>
          <div>
            <img src={image3} alt="image3" />
          </div>
          <div>
            <img src={image4} alt="image4" />
          </div>
          <div>
            <img src={image5} alt="image5" />
          </div>
          <div>
            <img src={image6} alt="image6" />
          </div>
          <div>
            <img src={image7} alt="image7" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default ImageGalleryCarousels;
