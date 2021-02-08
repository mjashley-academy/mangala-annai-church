import React, { Component } from 'react';
import MenuItem from './menuItem';
import Menu from './menu';
import MenuButton from './menuButton';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const styles = {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '99',
        opacity: 0.9,
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      },
      logo: {
        margin: '0 auto',
      },
    };
    const menu = ['About Us', 'Our Products', 'Services', 'FAQ', 'Contact Us'];
    const menuItems = menu.map((val, index) => (
      <MenuItem
        key={index}
        delay={`${index * 0.1}s`}
        onClick={() => {
          this.handleLinkClick();
        }}
      >
        {val}
      </MenuItem>
    ));

    return (
      <div>
        <div style={styles.container}>
          <MenuButton
            open={this.state.menuOpen}
            onClick={() => this.handleMenuClick()}
            color="white"
          />
        </div>
        <Menu open={this.state.menuOpen}>{menuItems}</Menu>
      </div>
    );
  }
}

export default Main;
