import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { Card, CardGroup, CardSubtitle, CardBody } from 'reactstrap';

export default class Jumbo extends React.Component {
  render() {
    return (
      <Jumbotron>
        <div>
          <CardGroup>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://thegorbalsla.com/wp-content/uploads/2018/10/gambar-karikatur-pendidikan-700x532.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://thegorbalsla.com/wp-content/uploads/2018/10/gambar-karikatur-pendidikan-700x532.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://thegorbalsla.com/wp-content/uploads/2018/10/gambar-karikatur-pendidikan-700x532.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      </Jumbotron>
    );
  }
}
