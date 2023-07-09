import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Auth.css";
import { authActions } from "../store/reducers/authentication";

const Auth = () => {
  
  const dispatch = useDispatch();

  const checkAuthFunc = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  }


  
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onClick={checkAuthFunc}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
