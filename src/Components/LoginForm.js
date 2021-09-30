import React, { useState } from "react";
import Button from "./Button";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const formSubmitHandler = (event) => {
    const Logindata = {
      email: email,
      password: password,
    };

    login(Logindata);

    console.log(Logindata);
    event.preventDefault();
    setEmail("");
    setPassword("");
  };
  // if (emailHandler === " "){
  //  console.log("ITS WORKING")
  // }

  //API Function
  //fatch data from data base throught API
  const url = "http://localhost:5000/api/v1/auth/login";

  const fetchData = async (Logindata) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(Logindata),
      });
      const json = await response.json();
      console.log(json);
      setEmail(this.state.email);
      setPassword(this.state.password);
    } catch (error) {
      console.log("error", error);
    }
    console.log(email, password);
  };

  const login = (Logindata) => {
    fetchData(Logindata);
    /*fetch("http://localhost:5000/api/v1/auth/login", {
       method: "POST",
       headers: {
         "content-type": "application/json",
         accept: "application/json",
       },
       body: JSON.stringify(Logindata),
     }).then((response) => 
       response.json()).then((response) => {
         console.log(response);
     }).catch((err) => {
         console.log(err);
     });*/
  };

  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Sign In </h2>
          <div className="fadeIn first"></div>
          <form onSubmit={formSubmitHandler}>
            <input
              onChange={emailHandler}
              value={email}
              type="email"
              id="email"
              className="fadeIn second"
              name="email"
              placeholder="e-mail"
            />

            <input
              onChange={passwordHandler}
              value={password}
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <Button />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
