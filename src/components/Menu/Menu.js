import React from "react";
import bank from "../img/bank.png";
//import components
import AllData from "../all_data/AllData";
import CreateAccount from "../create_account/CreateAccount";
import Deposit from "../deposit/Deposit";
import Homepage from "../homepage/Homepage";
import Withdraw from "../withdraw/Withdraw";
import Login from "../login/Login";

//import styling from react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//import react router functionality
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "../context/Context";

function BadBankNav() {
  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <h1 style={{ display: "inline", paddingRight: "20px" }}>
              Bad Bank
            </h1>
            <img
              src={bank}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Bad Bank"
              style={{ marginTop: "8px" }}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/create_account">Create Account</Nav.Link>
            <Nav.Link href="/Deposit">Deposit</Nav.Link>
            <Nav.Link href="/Withdraw">Withdraw</Nav.Link>
            <Nav.Link href="/all_data">All Data</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/login" element={<Login />} />

          <Route path="/create_account" element={<CreateAccount />} />

          <Route path="/Deposit" element={<Deposit />} />

          <Route path="Withdraw" element={<Withdraw />} />

          <Route path="/all_data" element={<AllData />} />
        </Routes>

    </Router>
  );
}

export default BadBankNav;
