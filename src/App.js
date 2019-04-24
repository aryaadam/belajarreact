import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './containers/home';
import Dashboard from './containers/dashbord';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/dashbord" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
