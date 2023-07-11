import React, { useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import CartItems from "./components/CartItems";


function App() {

  const isLoggedIn  = useSelector(state => state.auth.isLoggedin);

  const cartItemsVisibility = useSelector(state => state.cartSlice.showCart);

  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout /> }
      {cartItemsVisibility && <CartItems /> }
    </div>
  );
}

export default App;
