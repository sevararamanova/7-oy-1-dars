import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/CartActions';
import '../App.css';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
