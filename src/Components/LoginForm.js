import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const formSubmitHandler = (event) => {
    const Logindata = {
      emailId: email,
      password: password,
    };

    console.log(Logindata);
    event.preventDefault();
    setEmail("");
    setPassword("");
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
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
