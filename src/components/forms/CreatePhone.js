import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import NavBar from '../navbar/NavBar';
import { api } from '../../helpers/methodsPhone';

const CreatePhone = () => {
  const [ui, setUi] = useState({
    message: '',
    id: '',
  });

  const { message, id } = ui;
  // use a custom hook to set fields in form and get data
  const [formValues, handleInputChange] = useForm({
    name: '',
    price: '',
    manufacturer: '',
    color: '',
    model: '',
    detail: '',
    ram: '',
    size: '',
    screen: '',
    processor: '',
  });

  const {
    name,
    price,
    manufacturer,
    model,
    color,
    detail,
    ram,
    size,
    screen,
    processor,
  } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await api.createPhone(formValues);

    // Handle also error response and set new message
    // Set message to ui, but also is possible reset form or change disabled status to button Create
    if (resp.status === 201) {
      setUi({
        message: `Phone created!!`,
        id: resp.data._id,
      });
    }
  };

  return (
    <>
      <NavBar />
      <Container className="list-container">
        <Row>
          <Col className="mb-4">
            <h1>Create Phone</h1>
            <Link to="/phones">Back to All Phones</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="phoneName">Phone name</label>
                  <input
                    type="text"
                    name="name"
                    id="phoneName"
                    className="form-control"
                    placeholder="Phone name"
                    autoComplete="off"
                    value={name || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="phonePrice">Price</label>
                  <input
                    type="number"
                    name="price"
                    id="phonePrice"
                    className="form-control"
                    placeholder="Phone price"
                    autoComplete="off"
                    value={price || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="phoneManufacturer">Manufacturer</label>
                  <input
                    type="text"
                    name="manufacturer"
                    id="phoneManufacturer"
                    className="form-control"
                    placeholder="Phone manufacturer"
                    autoComplete="off"
                    value={manufacturer || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="phoneModel">Model</label>
                  <input
                    type="text"
                    name="model"
                    id="phoneModel"
                    className="form-control"
                    placeholder="Phone model"
                    autoComplete="off"
                    value={model || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="phoneColor">Color</label>
                  <input
                    type="text"
                    name="color"
                    id="phoneColor"
                    className="form-control"
                    placeholder="Phone color"
                    autoComplete="off"
                    value={color || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="phoneDetail">Detail</label>
                  <textarea
                    className="form-control"
                    name="detail"
                    id="phoneDetail"
                    placeholder="Phone detail"
                    autoComplete="off"
                    value={detail || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label htmlFor="phoneRam">RAM</label>
                  <input
                    type="text"
                    name="ram"
                    id="phoneRam"
                    className="form-control"
                    placeholder="RAM"
                    autoComplete="off"
                    value={ram || ''}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group col-md-3">
                  <label htmlFor="phoneSize">Size</label>
                  <input
                    type="text"
                    name="size"
                    id="phoneSize"
                    className="form-control"
                    placeholder="Phone size"
                    autoComplete="off"
                    value={size || ''}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group col-md-3">
                  <label htmlFor="phoneScreen">Screen</label>
                  <input
                    type="text"
                    name="screen"
                    id="phoneScreen"
                    className="form-control"
                    placeholder="Phone screen"
                    autoComplete="off"
                    value={screen || ''}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group col-md-3">
                  <label htmlFor="phoneProcessor">Processor</label>
                  <input
                    type="text"
                    name="processor"
                    id="phoneProcessor"
                    className="form-control"
                    placeholder="Phone processor"
                    autoComplete="off"
                    value={processor || ''}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
              {message && (
                <p>
                  {message} <Link to={`/phones/${id}`}>See phone</Link>
                </p>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreatePhone;
