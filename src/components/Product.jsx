import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/CartActions';
import '../App.css'; // CSS faylini import qilish

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default connect(null, { addToCart })(Product);
