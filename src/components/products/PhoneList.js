import React from 'react';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import NavBar from '../navbar/NavBar';
import PhoneCard from './PhoneCard';
import Spinner from '../spinner/Spinner';
import { useFetchPhones } from '../../hooks/useFetchPhones';

import './style/phone-list.css';

const PhoneList = () => {
  const { data: phones, loading } = useFetchPhones();

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
              {loading && <Spinner />}

              {phones.map((phone) => (
                <PhoneCard key={phone._id} {...phone} />
              ))}
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PhoneList;
