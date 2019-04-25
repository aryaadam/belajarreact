import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
export default class bodypayment extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Checkout Pembayaran</h1>
            <p className="lead">Total Yang Harus Di Bayar</p>
            <p>{this.props.totalHarga}</p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
