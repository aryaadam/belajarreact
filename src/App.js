import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './containers/home';
import Dashboard from './containers/dashbord';
import Payment from './containers/payment';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/dashbord" component={Dashboard} />
          <Route path="/payment" component={Payment} />
        </Switch>
      </div>
    );
  }
}

export default App;
