import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Img from '../Img';
import pope from '../../images/pope.png';
import bishop from '../../images/Bishop-Kottar.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: '100%',
  },
  popeImage: {
    width: '100%',
    height: '100%',
    position: 'relative',
    top: '-185px',
    '@media(min-width:360px)': {
      top: '-33px',
    },
    '@media(min-width:230px)': {
      top: '-21px',
    },
  },
  bishopImage: {
    width: '200px',
    'border-radius': '97px',
  },
  h2: {
    'text-align': 'center',
    color: '#2f5677',
    'font-size': '36px',
  },
}));

export default function ChurchHistory(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.h2}>{props.heading}</h2>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <ButtonBase className={classes.popeImage}>
              <Img className={classes.img} alt="pope photo" src={pope} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography gutterBottom variant="subtitle1" align="justify">
              {props.content}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <ButtonBase>
              <Img
                className={classes.bishopImage}
                alt="Bishop photo"
                src={bishop}
              />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
