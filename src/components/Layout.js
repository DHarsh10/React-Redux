import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
const Layout = () => {
  let total = 0;

  const list = useSelector(state => state.cartSlice.itemsList)
  list.map(item => (
    total += item.totalPrice
  ))

  console.log(total)

  return (
    <React.Fragment>
      <div className="layout">
        <Header />

        <Products />

        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
        
      </div>
    </React.Fragment>
  );
};

export default Layout;
