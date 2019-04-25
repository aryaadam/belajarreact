import React, { Component } from 'react';

import Header from '../../components/header';
import Body from '../../components/body';

import { Container, Row, Col, Jumbotron } from 'reactstrap';
class Dashboard extends Component {
  render() {
    return (
      <div align="center">
        <Header />
        <Body />
      </div>
    );
  }
}

export default Dashboard;
