import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    float:'left',
    margin:'20px 20px 0 0',
  },
  media: {
    height: 300,
  },
});
export default function GalleryTile(props) {
  const classes = useStyles();
  let items = []
for (let i = 0; i < props.slides.length; i++) {
  const tile = (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.slides[i].Image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.slides[i].Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.slides[i].Desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );

  items.push(tile);
}

  return <>{items}</>;
}
