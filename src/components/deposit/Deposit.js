import React from "react";
import UserContext from "../context/Context";
import { useState } from "react";
import { Card } from "react-bootstrap";
import bank from   "../img/bank.png"; 

const Deposit = ({ onChange, isDeposit, isValid }) => {
    const choice = ['Deposit', 'Cash Back'];
    console.log(`ATM isDeposit: ${isDeposit}`);
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
          <Card.Text as="h4">
            Deposit<br/>
            <input id="number-input" type="number" width="200" onChange={onChange}></input>
            <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
          </Card.Text>
        </Card.Body>
      </Card>
       
    );
  };
  
  const Account = () => {
    const [deposit, setDeposit] = React.useState(0);
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [atmMode, setAtmMode] = React.useState("");
    const [validTransaction, setValidTransaction] = useState(false)
  
    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);
    
    const handleChange = (event) => {
      console.log(`this is the ${Number(event.target.value)}`);
      if(Number(event.target.value) <= 0){
         setValidTransaction(false);
      }
      if(atmMode === 'Cash Back' && Number(event.target.value) > totalState){
         setValidTransaction(false);
      }else{
         setValidTransaction(true);
      }
      setDeposit(Number(event.target.value));
    };
  
    const handleSubmit = (event) => {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit; //if setDeposit is true than this will make it add, if false, make it subtract
  
      setTotalState(newTotal);
      setValidTransaction(false);
      event.preventDefault();
    };
  
    const handleModeSelect = (event) => {
      console.log(`handleModeSelect event: ${event.target.value}`);
      setAtmMode(event.target.value);
      setValidTransaction(false);
      //the if statement answers the logic on line 26 to either subtract or add to totalState
      if(event.target.value === "Deposit"){
        setIsDeposit(true)
      }else{
        setIsDeposit(false)
      }
    };
  
    
    return (
      <form onSubmit={handleSubmit}>
        <>
          <h2 id="total">{status}</h2>
          <label>Select an action below to continue</label>
          <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
            <option id="no-selection" value=""></option>
            <option id="deposit-selection" value="Deposit">
              Deposit
            </option>
            <option id="cashback-selection" value="Cash Back">
              Cash Back
            </option>
          </select>
          {atmMode && (
            <Deposit
              onChange={handleChange}
              isDeposit={isDeposit}
              isValid={validTransaction}
            ></Deposit>
          )}
        </>
      </form>
    );
  };
 
  

export default Deposit;