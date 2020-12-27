import React from "react";
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

function Header () {
    return (
        <Styles>
            <Navbar expand = "lg">
                <Navbar.Brand href = "/">Tutorial</Navbar.Brand>
                <Form className="form-center">
                    <FormControl type="text" placeholder="Search" className="" />
                </Form>
            </Navbar>
        </Styles>
    )
}

export default Header