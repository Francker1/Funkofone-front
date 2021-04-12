import React from 'react';
// import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import NavBar from '../navbar/NavBar';

import './style/phone-detail.css';

const PhoneScreen = ({ history }) => {
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  return (
    <>
      <NavBar />
      <Container className="list-container">
        <Row>
          <Col className="mb-4">
            <h1>Phone Detail 📱</h1>
            <button onClick={handleReturn} className="btn" type="button">
              Back
            </button>
          </Col>
        </Row>

        <Container className="detail-container | p-2 p-sm-5">
          <Row>
            <Col md={6}>
              <div className="relative">
                <Image src="https://picsum.photos/id/237/450/450" fluid />
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h6>Apple</h6>
                <h2 className="mb-4">iPhone 7</h2>
                <p className="text-sm">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit
                  amet, consectetur adipiscing elit . lorem ipsum dolor sit amet, consectetur
                  adipiscing elit
                </p>
                <p>Current price: 50,00 €</p>
              </div>
              <div className="mb-2">
                <dl>
                  <dt>Technical specifications</dt>
                  <dd>RAM: 8 gb</dd>
                  <dd>Size: 30cm</dd>
                  <dd>Screen: 4,7 inch IPS</dd>
                  <dd>Processor: A10 Fusion</dd>
                </dl>
              </div>
              <div>
                <p>Colors: black...</p>
              </div>
              <div>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

// PhoneScreen.propTypes = {};

export default PhoneScreen;
