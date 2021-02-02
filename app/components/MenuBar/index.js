import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import MenuWrapper from './MenuWrapper';

const useStyles = makeStyles({
  button: {
    'font-family': "'Helvetica Neue', Helvetica, Arial, sans-serif",
    'font-size': '16px',
    border: 'none',
    color: '#000',
    'text-transform': 'capitalize',
    'font-weight': 'bold',
    'min-width': '150px',
    'padding-right': '0',
    'margin-right': '21px',
    '&:hover': {
      'background-color': '#186587',
      color: '#FFF',
      outline: 'none',
      border: 'none',
      'border-radius': 0,
    },
    '&:after': {
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
    },
  },
});

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
    <MenuWrapper>
      <ButtonGroup
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        <Button className={classes.button}>Home</Button>
        <Button className={classes.button}>About Us</Button>
        <Button className={classes.button}>Mass Timings</Button>
        <Button className={classes.button}>Testimony</Button>
        <Button className={classes.button}>Notice Board</Button>
        <Button
          className={classes.button}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Gallery
        </Button>
        <Button className={classes.button}>Contact</Button>
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
  );
}
