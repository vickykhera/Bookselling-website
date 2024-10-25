import React from 'react';

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, book) => total + book.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((book, index) => (
            <div key={index} className="cart-item">
              <p>{book.title}</p>
              <p>${book.price}</p>
            </div>
          ))}
          <h3>Total: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;

