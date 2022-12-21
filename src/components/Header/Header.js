import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme(!theme);
  };
  const handleLogOut = () => {
    logOut()
      .then(toast.success("User Log Out Successfully"))
      .catch((error) => {
        alert("LogOut Unsuccessfull");
      });
  };
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              className=" d-flex gap-3 align-items-center text-light text-decoration-none"
            >
              <img src={logo} alt="" width="60px" />
              <h4>Crack BCS</h4>
            </Link>
          </Navbar.Brand>
          <div
            onClick={handleTheme}
            className={`theme-icon text-white mx-3 ${
              theme ? "bg-warning" : "bg-dark"
            } p-2 rounded-circle`}
          >
            {theme ? (
              <SunIcon style={{ width: "26px" }}></SunIcon>
            ) : (
              <MoonIcon style={{ width: "26px" }}></MoonIcon>
            )}
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <div className="ms-auto">
              {user && user.uid ? (
                <>
                  <p className="text-light m-0 fw-bold">
                    Hello {user.displayName ? user.displayName : "user"}
                  </p>
                </>
              ) : (
                ""
              )}
            </div>

            <Nav className="text-light">
              <Link
                to="/courses"
                className="text-light mx-3 text-decoration-none"
              >
                COURSES
              </Link>
              <Link to="/faq" className=" text-light mx-3 text-decoration-none">
                FAQ
              </Link>
              <Link
                to="/blog"
                className=" text-light mx-3 text-decoration-none"
              >
                blog
              </Link>
              {user && user.uid ? (
                <>
                  <Link
                    onClick={handleLogOut}
                    className=" text-light text-decoration-none"
                  >
                    signOut
                  </Link>
                </>
              ) : (
                <Link to="/login" className=" text-light text-decoration-none">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>

          <div className="user-img">
            {user ? (
              <img
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/2-Boy-256.png"
                }
                alt=""
                width="50px"
                className="ms-2 rounded-circle border border-3 border-warning"
              />
            ) : (
              ""
            )}
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
