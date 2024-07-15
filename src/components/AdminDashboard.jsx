import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import '../App.css';

const AdminDashboard = ({ cartItems }) => {
  const sampleProducts = [
    { id: 1, name: 'Product 1', description: 'Description of product 1' },
    { id: 2, name: 'Product 2', description: 'Description of product 2' },
    // Add more products as needed
  ]
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Products</h3>
        {sampleProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div>
        <h3>Cart</h3>
        {cartItems.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(AdminDashboard);
