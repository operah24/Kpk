import React, { useState } from "react";
import Input from "../components/Input";
import "../App.css";
import { Redirect } from "react-router-dom";
const LoginPage = (props) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [loginsuccess, setLoginsuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    const url = "https://brightly-api.herokuapp.com/api/v1/auth/login";
    const { email, password } = inputs;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          setLoginsuccess(true)
        }       
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <h1>Login Page</h1>
      <div className="form-cont">
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            value={inputs.email}
            label="Email"
            placeholder="abc@gmail.com"
            handleChange={handleChange}
            required="required"
          />
          <Input
            type="password"
            name="password"
            value={inputs.password}
            label="Password"
            placeholder="password"
            handleChange={handleChange}
            required="required"
          />
          {loginsuccess === true ? (
             <Redirect to="/home" />
          ) : (
            <center>
              <button type="submit" className="btn">
                Login
              </button>
            </center>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
