import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BtnLinkDefault from '../buttons/default/BtnLinkDefault';

import './style/navbar.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="funko-nav">
      <Navbar.Brand className="funko-nav_brand">
        <Link to="/">Funk-o-Fone</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="funko-nav_links ml-auto mr-3">
          <BtnLinkDefault url="/new/" text="New Phone" className="btn btn-link | px-5" />
        </Nav>
        {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button>Search</Button>
          </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
