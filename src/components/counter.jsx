import React, { Component } from 'react';
//import sate from './Sate3.jpg';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  CardSubtitle,
  Button,
  CardFooter
} from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
export default class Counter extends Component {
  state = {
    nomor: 1,
    harga: 10000,
    biaya: 10000
  };
  Tam = () => {
    this.setState(({ nomor, harga, biaya }) => ({
      nomor: nomor + 1,
      harga: harga + biaya
    }));
  };
  Kur = () => {
    var nomor = this.state.nomor;

    if (nomor > 0) {
      this.setState(({ nomor, harga, biaya }) => ({
        nomor: nomor - 1,
        harga: harga - biaya
      }));
    }
  };
  render() {
    return (
      <div>
        <Card style={{ width: '100%', height: '50%', marginRight: '10px' }}>
          <CardImg
            top
            width="100%"
            src={this.props.gambar}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.nama}</CardTitle>
            <p>Pesan Berapa</p>
            <p>Harga:{this.state.harga}</p>
            <div>
              <Navbar
                style={{ backgroundColor: 'lightblue' }}
                color="faded"
                light
              >
                <Button onClick={this.Kur} className="btn btn-danger m-2">
                  -
                </Button>
                <h1>{this.state.nomor}</h1>
                <Button onClick={this.Tam} className="btn btn-success m-2">
                  +
                </Button>
              </Navbar>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
