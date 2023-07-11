import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import cartSlice, { cartSliceActions } from "../store/reducers/cartSlice";
const Cart = () => {

  const quantity = useSelector(state => state.cartSlice.totalQuantity);
  const dispatch = useDispatch();
  
  const cartIconFunc = () => {
    dispatch(cartSliceActions.showCartContainer());
  }
  return (
    <div className="cartIcon" onClick={cartIconFunc}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
