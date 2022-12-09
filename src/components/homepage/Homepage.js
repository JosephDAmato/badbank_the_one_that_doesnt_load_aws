import React from "react";
//importing bootstrap rea ct
import { Button } from "react-bootstrap";
import UserContext from "../context/Context";
import { Card } from "react-bootstrap";
import bank from "../img/bank.png"; 


function Homepage() {
    const ctx= React.useContext(UserContext);
  return (
    <div className="container">
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
          <Card.Body></Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            
          </Card.Subtitle>
          <Card.Text>
            The leader in unsecured banking
          </Card.Text>
          <Card.Link href="/create_account">Get Started</Card.Link>
          <Card.Link href="/withdrawl">Make a withdrawal</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Homepage;
