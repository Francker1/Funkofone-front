import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BtnBubble from '../buttons/bubble/BtnBubble';

import './style/phone-card.css';

const PhoneCard = (props) => {
  return (
    <Col sm={4} className="mb-5">
      <Card className="shadow border-0">
        <Card.Img variant="top" src="https://picsum.photos/id/237/250/150" />
        <h6 className="card-maker">Apple</h6>
        <Card.Body>
          <h4>Phone Name</h4>
          <p>This is a wider card with supporting text below as a natural lead-in to additional.</p>
          <p>color: white</p>
          <h5>50,00 €</h5>
        </Card.Body>
        <Row>
          <Col>
            <Link to="/phones/edit/15">Editar</Link>
          </Col>
          <Col>
            <BtnBubble url="/phones/15" text="Details" />
          </Col>
        </Row>
        <Card.Footer>
          <small className="text-muted">ID phone: 0001</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

PhoneCard.propTypes = {};

export default PhoneCard;
