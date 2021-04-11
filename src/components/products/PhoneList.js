import React from 'react';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import NavBar from '../navbar/NavBar';
import PhoneCard from './PhoneCard';

import './style/phone-list.css';

const PhoneList = () => {
  return (
    <>
      <NavBar />
      <Container className="list-container">
        <Row>
          <Col className="mb-4">
            <h1>Phone List 📱</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
              <PhoneCard />
              <PhoneCard />
              <PhoneCard />
              <PhoneCard />
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PhoneList;
