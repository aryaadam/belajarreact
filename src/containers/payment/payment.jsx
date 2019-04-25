import React, { Component } from 'react';
import Header from '../../components/header';
import { Jumbotron, Container } from 'reactstrap';

export default class Payment extends Component {
  componentDidMount() {
    var x = sessionStorage.total;
    document.getElementById('total').innerHTML = x;
  }
  render() {
    return (
      <div>
        <Header name="Payment" />
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Checkout Pembayaran</h1>
            <p className="lead">Total Yang Harus Di Bayar</p>
            <p id="total" />
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
