import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Icon from '@material-ui/core/Icon';
import autoBind from 'auto-bind';
import { ContentItems } from './testimonials-content';
import './testimonial.css';

import { CarouselWrapper } from './carousel-styledcomponents';
import Testimonial from './testimonial';

class Testimonials extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: false,
      animation: 'fade',
      indicators: false,
      timeout: 500,
      navButtonsAlwaysVisible: true,
      navButtonsAlwaysInvisible: false,
      
    };

    autoBind(this);
  }

  render() {
    return (
      <div>
        <CarouselWrapper>
          <h2 className="testimonial-heading">Testimonials</h2>
          <Carousel
            className="testimonials-container"
            autoPlay={this.state.autoPlay}
            animation={this.state.animation}
            indicators={this.state.indicators}
            timeout={this.state.timeout}
            navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
            navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
            navButtonsProps={{
              style: {
                background: 'none',
                color: '#494949',
              },
            }}
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
            {ContentItems.map((item, index) => (
              <Testimonial />
            ))}
          </Carousel>
        </CarouselWrapper>
      </div>
    );
  }
}

export default Testimonials;
