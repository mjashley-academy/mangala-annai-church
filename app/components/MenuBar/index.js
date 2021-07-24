import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import color from 'material-ui/colors/amber';
import messages from './messages';

import MenuWrapper from './MenuWrapper';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  containerWrapper: {
    width: '100vw',
  },

  button: {
    'font-size': '16px',
    border: '1px solid gainsboro',
    color: 'white',
    'font-family': 'fangsong',
    'text-transform': 'capitalize',
    'font-weight': 'bold',
    'min-width': '150px',
    'padding-right': '0',
    'box-sizing': '2px gray',
    'background-color': 'gainsboro',
    'text-shadow': '2px 2px 8px #186587',
    border: '2px solid #2f5677',
    '&:hover': {
      'background-color': '#186587',
      color: '#FFF',
      outline: 'none',
      'border-radius': 0,
    },
    /* '&:after': {
      content: '"|"',
      float: 'right',
      color: '#000',
    },
    '&:last-child::after': {
      display: 'none',
    },
    '& .MuiButton-label': {
      position: 'relative',
      left: '-21px',
    }, */
  },
}));

export default function MenuBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.containerWrapper}>
        <Grid item xs={12}>
          <MenuWrapper>
            <ButtonGroup
              size="large"
              color="primary"
              aria-label="large outlined primary button group"
            >
              <Button className={classes.button}>
                <FormattedMessage {...messages.home} />
              </Button>
              <Button className={classes.button}>
                <FormattedMessage {...messages.aboutUs} />
              </Button>
              <Button className={classes.button}>
                <FormattedMessage {...messages.massTimings} />
              </Button>
              <Button className={classes.button}>
                <FormattedMessage {...messages.testimony} />
              </Button>
              <Button className={classes.button}>
                <FormattedMessage {...messages.noticeBoard} />
              </Button>
              <Button
                className={classes.button}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <FormattedMessage {...messages.gallery} />
              </Button>
              <Button className={classes.button}>
                <FormattedMessage {...messages.contact} />
              </Button>
            </ButtonGroup>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Picture Gallery</MenuItem>
              <MenuItem onClick={handleClose}>Audio Gallery</MenuItem>
              <MenuItem onClick={handleClose}>Video Gallery</MenuItem>
            </Menu>
          </MenuWrapper>
        </Grid>
      </Grid>
    </div>
  );
}
