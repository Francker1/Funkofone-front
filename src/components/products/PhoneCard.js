import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'react-bootstrap';

import './style/phone-card.css';
import BtnLinkDefault from '../buttons/default/BtnLinkDefault';

const PhoneCard = (props) => {
  return (
    <Col sm={4} className="mb-5">
      <Card className="shadow border-0">
        <Card.Img variant="top" src="https://picsum.photos/id/237/250/150" />
        <h6 className="card-maker">Apple</h6>
        <Card.Body>
          <h4>Phone Name</h4>
          <p>color: white</p>
          <h5>50,00 €</h5>
        </Card.Body>
        <div className="d-flex mb-3 card-buttons">
          <Col sm={6}>
            <BtnLinkDefault url="/phones/edit/15" text="Edit" className="btn w-100" outlined />
          </Col>
          <Col sm={6}>
            <BtnLinkDefault url="/phones/15" text="Details" className="btn w-100" />
          </Col>
        </div>
        <Card.Footer>
          <small className="text-muted">ID phone: 0001</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

PhoneCard.propTypes = {};

export default PhoneCard;
