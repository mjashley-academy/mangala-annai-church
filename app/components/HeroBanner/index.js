import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import { ContentItems } from './herobanner-content';
import './herobanner.css';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';

import { CarouselWrapper } from './carousel-styledcomponents';
import Banner from './banner';

function Banner1(props) {
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : 'left';
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  const items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>

        <Button variant="outlined" className="ViewButton">
          View Now
        </Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === 'left') {
    items.unshift(content);
  } else if (contentPosition === 'right') {
    items.push(content);
  } else if (contentPosition === 'middle') {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}

class HeroBanner extends React.Component {
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
    return (
      <div>
        <CarouselWrapper>
          <Carousel
            className="Example"
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
            {ContentItems.map((item, index) => (
              <Banner
                item={item}
                key={index}
                contentPosition={item.contentPosition}
              />
            ))}
          </Carousel>
        </CarouselWrapper>
      </div>
    );
  }
}

export default HeroBanner;
