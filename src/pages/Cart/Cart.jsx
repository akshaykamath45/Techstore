import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, handleDeleteFromCart, handleIncreaseQuantity, handleDecreaseQuantity } = useContext(CartContext);

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Cart Items</h2>
        {cart.map((item) => (
          <div key={item._id} className="cart-item">
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <p>{item.name}</p>
              <p>Price: {item.price}</p>
              <div className="quantity-container">
                <button onClick={() => handleDecreaseQuantity(item._id)} className='cart-quantity-btn'>-</button>
                <p className='item-quantity'>{item.quantity}</p>
                <button onClick={() => handleIncreaseQuantity(item._id)} className='cart-quantity-btn'>+</button>
              </div>
              <button onClick={() => handleDeleteFromCart(item._id) } className='delete-cart-btn'>
                Delete from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="total-amount">
        <h2>Total Amount</h2>
        <p>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
      </div>
    </div>
  );
};

export default Cart;
