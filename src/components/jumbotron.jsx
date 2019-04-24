import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Jumbo = props => {
  return (
    <div>
      <Jumbotron align="center">
        <img src="https://lelogama.go-jek.com/ramadhan2018_page_icon/go-food3x.png" />
        <p className="lead">{props.judul}</p>
        <hr className="my-2" />
        <p className="lead">
          <Button tag={Link} to="/dashbord" color="success">
            Pesan Sekarang
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
