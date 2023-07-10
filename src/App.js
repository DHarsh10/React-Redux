import React, { useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import Layout from "./components/Layout"



function App() {

  const isLoggedIn  = useSelector(state => state.auth.isLoggedin);

  const cartItems = useSelector(state => state.cartSlice.itemsList);

  console.log(cartItems)
  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout /> }
    </div>
  );
}

export default App;
