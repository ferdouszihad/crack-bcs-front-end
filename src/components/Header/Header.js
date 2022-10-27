import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className="d-flex gap-3 align-items-center">
            <Link to="/" className="text-light text-decoration-none">
              <img src={logo} alt="" width="60px" />
              <h4>Crack BCS</h4>
            </Link>
          </Navbar.Brand>

          <Nav className="ms-auto text-light">
            <Link to="/home" className="text-light mx-3 text-decoration-none">
              HOME
            </Link>
            <Link
              to="/courses"
              className="text-light mx-3 text-decoration-none"
            >
              COURSES
            </Link>
            <Link to="/faq" className=" mx-3 text-decoration-none">
              FAQ
            </Link>
            <Link to="/blog" className=" mx-3 text-decoration-none">
              blog
            </Link>
            <Link to="/login" className=" mx-3 text-decoration-none">
              Log-in
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
