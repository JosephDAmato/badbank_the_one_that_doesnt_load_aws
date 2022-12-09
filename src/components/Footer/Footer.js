import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import bank from "../img/bank.png"; 
import UserContext from "../context/Context";

function Footer() {
  return (
    <div>
        <br/>
      <Navbar fixed="bottom" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <h6>Bad Bank
            <img
              src={bank}
              width="10"
              height="10"
              className="d-inline-block align-top"
              alt="Bad Bank"
              style={{ marginTop: "6px", marginLeft: "3px"}} />
            </h6>
            <h6>The worlds foremost FLAWED & UNSECURED banking systems </h6>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
