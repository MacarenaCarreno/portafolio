import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Work } from './components';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Work} />
        <Route exact path="/about" component={About} />
        <Route exact path="/works" component={Work} />
      </Switch>
    );
  }
}

export default Routes;
