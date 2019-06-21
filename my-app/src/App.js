import React, { Component } from 'react';
import { Navbar, SideNav, BackNav } from './components';
import Main from './Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideOpen: false,
    };
  }
  navToggleClick = () => {
    this.setState(prevState => {
      return { sideOpen: !prevState.sideOpen };
    });
  };

  backCloseClick = () => {
    this.setState({ sideOpen: false });
  };

  render() {
    let backNavClose;
    if (this.state.sideOpen) {
      backNavClose = <BackNav click={this.backCloseClick} />;
    }

    return (
      <div>
        <Navbar navToggleClick={this.navToggleClick} />
        <SideNav
          show={this.state.sideOpen}
          navToggleClick={this.navToggleClick}
        />
        {backNavClose}

        <Main />
      </div>
    );
  }
}

export default App;
