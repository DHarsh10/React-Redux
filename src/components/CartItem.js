import React from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import cartSlice, { cartSliceActions } from "../store/reducers/cartSlice";
const CartItem = ({ name, quantity, total, price, id }) => {

  const dispatch = useDispatch();
  
  const addToCartBtn = () => {
    dispatch(cartSliceActions.addTocart({
      name,
      id,
      price
    }))
  }

  const removeFromCart = () => {
    dispatch(cartSliceActions.removeFromTheCart(id))
  }


  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeFromCart}>
        -
      </button>
      <button className="cart-actions" onClick={addToCartBtn}>
        +
      </button>
    </div>
  );
};

export default CartItem;
