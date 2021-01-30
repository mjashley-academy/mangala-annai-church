import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import MenuWrapper from './MenuWrapper';

const useStyles = makeStyles({
  button: {
    '&.active': {
      background: 'black',
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
        <Button>Notice Board</Button>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Gallery
        </Button>
        <Button>Contact</Button>
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
