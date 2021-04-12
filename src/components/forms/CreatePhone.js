import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useForm from '../../hooks/useForm';
import NavBar from '../navbar/NavBar';

const CreatePhone = () => {
  // use a custom hook to set fields in form and get data
  const [formValues, handleInputChange] = useForm({
    name: '',
    price: '',
    manufacturers: '',
    color: '',
    description: '',
    ram: '',
    size: '',
    screen: '',
    processor: '',
  });

  const {
    name,
    price,
    manufacturers,
    color,
    description,
    ram,
    size,
    screen,
    processor,
  } = formValues;

  // useEffect(() => {
  //   console.log('email cambió');
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <NavBar />
      <Container className="list-container">
        <Row>
          <Col className="mb-4">
            <h1>Create Phone</h1>
          </Col>
        </Row>
        <Row>
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
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="phoneManufacturers">Manufacturers</label>
                <select
                  className="form-control"
                  name="manufacturers"
                  id="phoneManufacturers"
                  value={manufacturers || ''}
                  onChange={handleInputChange}
                >
                  <option disabled>Choose...</option>
                  <option>Apple</option>
                  <option>Huawei</option>
                  <option>LG</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="form-group col-md-6">
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
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="phoneDescription">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  id="phoneDescription"
                  placeholder="Phone description"
                  autoComplete="off"
                  value={description || ''}
                  onChange={handleInputChange}
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
          </form>
        </Row>
      </Container>
    </>
  );
};

export default CreatePhone;
