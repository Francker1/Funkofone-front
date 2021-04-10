import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cover = () => {
  return (
    <Container className="p-3">
      <Row>
        <Col>
          <h1>Bienvenido a Funk-o-Fone</h1>
        </Col>
        <Link to="/phones/">descubrir</Link>
      </Row>
    </Container>
  );
};

export default Cover;
