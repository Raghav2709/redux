import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Cartslice";

const Cart = () => {
  const cartitems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <h3>Cart Page</h3>
      <div className="cartWrapper">
        {cartitems.map((item) => (
          <div className="cartCard">
            <img src={item.image} alt="" />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button onClick={() => handleRemove(item.id)}>remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
