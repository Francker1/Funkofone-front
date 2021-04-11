import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BtnBubble from '../buttons/bubble/BtnBubble';

import './style/cover.css';

const Cover = () => {
  return (
    <Container className="cover" fluid>
      <Row>
        <Col className="cover-msg__container">
          <Col className="p-4">
            <h1 className="mb-4">Welcome to Funk-o-Fone</h1>
            <p>Discover our list of phones with the latest market trends</p>
            <div className="col-5 | mx-auto mt-5">
              <BtnBubble url="/phones/" text="Browse Phones" />
            </div>
          </Col>
        </Col>
        <Col className="p-0">
          <div className="cover-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default Cover;
