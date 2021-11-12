import React from 'react';
import Carousel from 'react-elastic-carousel';
import image1 from './image/image1.jpg';
import image2 from './image/image2.jpg';
import image3 from './image/image3.jpg';
import image4 from './image/image4.jpg';
// import image5 from './image/image1.jpg';
import image6 from './image/image6.jpg';
import image7 from './image/image7.jpg';
import DIV from './DIV';

import './Gallery.css';

const breakpoints = [
  { width: 1, itemToShow: 1 },
  { width: 550, itemToShow: 2 },
  { width: 768, itemToShow: 3 },
  { width: 900, itemToShow: 4 },
];

class Gallery extends React.Component {
  render() {
    return (
      <Carousel breakpoints={breakpoints}>
        <DIV>
          <img src={image1} alt="image1" />

          <img src={image2} alt="image2" />

          <img src={image3} alt="image3" />

          <img src={image4} alt="image4" />
        </DIV>
        <DIV>
          <img src={image4} alt="image4" />
          <img src={image1} alt="image5" />

          <img src={image6} alt="image6" />

          <img src={image7} alt="image7" />
        </DIV>
      </Carousel>
    );
  }
}

export default Gallery;
