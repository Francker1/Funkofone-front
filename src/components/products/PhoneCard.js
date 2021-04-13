import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'react-bootstrap';

import './style/phone-card.css';
import BtnLinkDefault from '../buttons/default/BtnLinkDefault';

const PhoneCard = ({ _id, manufacturer, name, color, price, model, image }) => {
  return (
    <Col sm={6} lg={4} className="mb-5">
      <Card className="shadow border-0">
        <Card.Img variant="top" src={image} height="230" />
        <h6 className="card-maker">{manufacturer}</h6>
        <Card.Body>
          <h4>{name}</h4>
          <p>color: {color}</p>
          <h5>{price} €</h5>
        </Card.Body>
        <div className="d-flex mb-3 card-buttons">
          <Col sm={6}>
            <BtnLinkDefault
              url={`/phones/edit/${_id}`}
              text="Edit"
              className="btn w-100"
              outlined="true"
            />
          </Col>
          <Col sm={6}>
            <BtnLinkDefault url={`/phones/${_id}`} text="Details" className="btn w-100" />
          </Col>
        </div>
        <Card.Footer>
          <small className="text-muted">Model: {model}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

PhoneCard.propTypes = {
  name: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  model: PropTypes.string.isRequired,
};

export default PhoneCard;
