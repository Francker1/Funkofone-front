import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BtnLinkDefault from '../buttons/default/BtnLinkDefault';
import { PhoneContext } from '../PhoneContext';

import './style/navbar.css';

const NavBar = () => {
  const { name } = useContext(PhoneContext);

  return (
    <Navbar expand="md" fixed="top" className="funko-nav">
      <Container>
        <Navbar.Brand className="funko-nav_brand">
          <Link to="/">Funk-o-Fone</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="funko-nav_links ml-auto mr-3">
            <h6 className="funko-nav_user">Hi {name}!</h6>
            <BtnLinkDefault url="/new/" text="New Phone" className="btn btn-link | px-5" />
          </Nav>
          {/* The API is prepared to filter phones by name, but I can't implement by the moment (time issues) */}
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button>Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
