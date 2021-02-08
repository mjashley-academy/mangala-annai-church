import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

import { Items } from './slider-content';

export default class SlideBar extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          {Items.map((item, index) => (
            <div className="slider-container" key={index}>
              <img src={item.Image} alt={item.Name} />
              <span className="caption">{item.Name}</span>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
