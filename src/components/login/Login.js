import React from "react";
import UserContext from "../context/Context";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bank from "../img/bank.png";

function Login() {
  return (
    <Card className="mx-auto" style={{ width: "35rem", height: "25rem", alignContent: "center"}}>
    <Card.Body>
    <Card.Header as="h2">
          Bad Bank
          <img
            src={bank}
            width="24"
            height="24"
            className="d-inline-block align-left"
            alt="Bad Bank"
            style={{ marginLeft:"10px", marginBottom: "4px" }} />
        </Card.Header>
        <Card.Text>
        Email<br/>      
        <input id="number-input" type="number" width="200"></input>
        <br/>
        Password<br/>
        <input id="number-input" type="number" width="200"></input>
        </Card.Text>
        <Button variant="primary">Login</Button>
      </Card.Body>
    </Card>
  );
}

export default Login;