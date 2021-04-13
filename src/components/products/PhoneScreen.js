import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

import NavBar from '../navbar/NavBar';
import Spinner from '../spinner/Spinner';
import { useFetchPhones } from '../../hooks/useFetchPhones';
import BtnLinkDefault from '../buttons/default/BtnLinkDefault';
import { api } from '../../helpers/methodsPhone';
import ModalFunkoFone from '../ui/modals/Modal';

import './style/phone-screen.css';

const PhoneScreen = ({ history }) => {
  const { id } = useParams();
  const { data: phone, loading } = useFetchPhones(id);

  const {
    _id,
    name,
    manufacturer,
    detail,
    price,
    image,
    ram,
    size,
    screen,
    processor,
    color,
  } = phone;

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  const onHandleRemove = async () => {
    try {
      const resp = await api.deletePhone(_id);

      setTimeout(() => {
        history.push('/phones');
      }, 1500);

      return resp;
    } catch (e) {
      return e;
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

        <Container className="detail-container shadow-lg | p-2 p-sm-5">
          {loading && <Spinner />}

          <Row>
            <Col md={6}>
              <div className="relative">
                <Image src={image} fluid />
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h6>{manufacturer}</h6>
                <h2 className="mb-4">{name}</h2>
                <p className="text-sm">{detail}</p>
                <p>Current price: {price} €</p>
              </div>
              <div className="mb-2">
                <dl>
                  <dt>Technical specifications</dt>
                  <dd>RAM: {ram}</dd>
                  <dd>Size: {size}</dd>
                  <dd>Screen: {screen}</dd>
                  <dd>Processor: {processor}</dd>
                </dl>
              </div>
              <div>
                <p>Colors: {color}</p>
              </div>
              <div className="row">
                <div className="col-6">
                  <BtnLinkDefault
                    url={`/phones/edit/${_id}`}
                    text="Edit"
                    className="btn w-100"
                    outlined="true"
                  />
                </div>
                <div className="col-6">
                  <ModalFunkoFone id={_id} method={onHandleRemove} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default PhoneScreen;
