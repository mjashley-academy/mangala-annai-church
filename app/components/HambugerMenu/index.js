/* Main.jsx */
import React, { Component } from 'react';
import Main from './main';
class HamburgerMenu extends Component {
  render() {
    const styles = {
      main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    };

    return (
      <div style={styles.main}>
        <Main />
      </div>
    );
  }
}

export default HamburgerMenu;
