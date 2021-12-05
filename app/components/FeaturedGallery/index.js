import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import { ContentItems } from './featuredGallery-content';
import './featured-gallery.css';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';

import { CarouselWrapper } from './carousel-styledcomponents';
import GalleryTile from './GalleryTile';

class FeaturedGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: false,
      animation: 'fade',
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: true,
      navButtonsAlwaysInvisible: false,
    };

    autoBind(this);
  }

  render() {
      console.log(this.props);
    return (
      <div>
        <CarouselWrapper>
          <h2 className="gallery-heading">Featured Gallery</h2>
          <Carousel
            className="featured-gallery"
            autoPlay={this.state.autoPlay}
            animation={this.state.animation}
            indicators={this.state.indicators}
            timeout={this.state.timeout}
            navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
            navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
            next={(now, previous) =>
              console.log(
                `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`,
              )
            }
            prev={(now, previous) =>
              console.log(
                `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`,
              )
            }
            onChange={(now, previous) =>
              console.log(
                `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`,
              )
            }
          >
            {ContentItems.map((item, index) => {
              let slidenum = 'slide' + index;
              return <GalleryTile slides={item[slidenum]} />;
            })}
          </Carousel>
        </CarouselWrapper>
      </div>
    );
  }
}

export default FeaturedGallery;
