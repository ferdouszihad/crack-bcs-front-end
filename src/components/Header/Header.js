import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { BeakerIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme(!theme);
  };
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
          <div className="ms-auto"></div>

          <Nav className="text-light">
            <Link to="/home" className="text-light mx-3 text-decoration-none">
              HOME
            </Link>
            <Link
              to="/courses"
              className="text-light mx-3 text-decoration-none"
            >
              COURSES
            </Link>
            <Link to="/faq" className=" text-light mx-3 text-decoration-none">
              FAQ
            </Link>
            <Link to="/blog" className=" text-light mx-3 text-decoration-none">
              blog
            </Link>
            <Link to="/login" className=" text-light text-decoration-none">
              Login
            </Link>
          </Nav>
          <div
            onClick={handleTheme}
            className={`theme-icon text-white mx-3 ${
              theme ? "bg-warning" : "bg-dark"
            } p-1 rounded-circle`}
          >
            {theme ? (
              <SunIcon style={{ width: "26px" }}></SunIcon>
            ) : (
              <MoonIcon style={{ width: "26px" }}></MoonIcon>
            )}
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
