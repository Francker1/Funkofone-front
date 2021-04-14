import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
// import useForm from '../../hooks/useForm';
import NavBar from '../navbar/NavBar';
import { api } from '../../helpers/methodsPhone';
import { getPhones } from '../../helpers/getPhones';

const EditPhone = () => {
  const { id: idPhone } = useParams();
  const [data, setData] = useState({});

  const [ui, setUi] = useState({
    message: '',
    id: '',
  });

  const { message, id } = ui;

  // Also, is possible no use a customHook and create a form like this:

  const fetchData = async () => {
    const res = await getPhones(idPhone);
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const resp = await api.createPhone(formValues);

    // Handle also error response and set new message
    // Set message to ui, but also is possible reset form or change disabled status to button Create
    // if (resp.status === 201) {
    setUi({
      message: `Phone created!!`,
      id: 200,
    });
    // }

    console.log(data);
  };

  return (
    <>
      <NavBar />
      <Container className="list-container">
        <Row>
          <Col className="mb-4">
            <h1>Edit Phone</h1>
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
                    value={data.name || ''}
                    onChange={handleEditChange}
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
                    value={data.price || ''}
                    onChange={handleEditChange}
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
                    value={data.manufacturer || ''}
                    onChange={handleEditChange}
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
                    value={data.model || ''}
                    onChange={handleEditChange}
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
                    value={data.color || ''}
                    onChange={handleEditChange}
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
                    value={data.detail || ''}
                    onChange={handleEditChange}
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
                    value={data.ram || ''}
                    onChange={handleEditChange}
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
                    value={data.size || ''}
                    onChange={handleEditChange}
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
                    onChange={handleEditChange}
                    value={'esta' || ''}
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
                    value={data.processor || ''}
                    onChange={handleEditChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Edit
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

export default EditPhone;
