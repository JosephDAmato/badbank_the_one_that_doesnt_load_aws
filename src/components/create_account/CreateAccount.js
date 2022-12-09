import React, { useContext } from "react";

import { useFormik } from "formik";
import { Card } from "react-bootstrap";
import UserContext from "../context/Context";
import adduserimg from "../img/adduserimg.png";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log("form:", values);
      ctx.user.push({ name, email, password, balance: 100 });
      setShow(false);
      console.table(ctx);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) errors.name = "Required";
      if (!values.email) errors.email = "Required";
      if (!values.password) errors.password = "Required";
      return errors;
    },
  });

  function clearForm() {
    setName("");
    setPassword("");
    setEmail("");
    setShow("true");
  }
  return (
    <>
    <Card className="mx-auto" style={{ width: "30rem", height: "auto", alignItems: "center" }}>
      <Card.Img className="img-fluid" variant="top" /*src={adduserimg}*//>
      <Card.Body>
        <Card.Title id="title">Create Account</Card.Title>
          <Card.Subtitle>
            Start banking with us today! Fill out all fields below to set up you account.
          </Card.Subtitle>
      </Card.Body>
    </Card>
    <Card status={status} className="list-group-flush" style={{ width: "30rem", height: "auto", alignItems: "center" }}
>
      {show ? (
        <>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div>Name:</div>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              ) : null}
              <div>Email:</div>
              <input
                type="text"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
              <div>Password:</div>
              <input
                type="text"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <br />
              {formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
              <button type="submit">Submit</button>- or -
              <Link to="/login">Login</Link>
            </form>
          </div>
        </>
      ) : (
        <>
          <div>
            <h5>Success</h5>
          </div>
          <button type="submit" className="btn btn-light" onClick={clearForm}>
            Add another account
          </button>
          <a href="#/login/">Login</a>
          <br />
        </>
      )}
    </Card>
    </> 
     );
}

export default CreateAccount;
