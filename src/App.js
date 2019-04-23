import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Counter from './components/counter';
import Jumbo from './components/jumbo';
import { Container, Row, Col } from 'reactstrap';
class App extends Component {
  state = {
    makanan: [
      {
        nama: 'Nasi Merah',
        gambar:
          'https://www.sahabatnestle.co.id/uploads/media/article/0001/04/thumb_3661_article_image_723x480.jpeg'
      },
      {
        nama: 'Nasi Goreng',
        gambar:
          'https://mk0foodfornetcoviwv0.kinstacdn.com/wp-content/uploads/Nasi-Goreng-Final-1.jpg'
      },
      {
        nama: 'Ayam Goreng',
        gambar:
          'https://mk0foodfornetcoviwv0.kinstacdn.com/wp-content/uploads/Oven-Crisped-Lemon-and-Garlic-Chicken-Legs-Final-1.jpg'
      }
    ]
  };

  render() {
    return (
      <div align="center">
        <Header />
        <Row>
          {this.state.makanan.map(item => (
            <Col xs="4">
              <Counter gambar={item.gambar} nama={item.nama} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default App;
