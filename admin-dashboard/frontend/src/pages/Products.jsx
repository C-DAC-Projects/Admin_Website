import React from "react";
import "../styles/products.css";

const Products = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Products Management</h1>
      
      <div className="products-controls">
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button>Search</button>
        </div>
        <div className="filter-section">
          <select>
            <option>All Categories</option>
            <option>Food</option>
            <option>Toys</option>
            <option>Accessories</option>
          </select>
          <button className="add-product-btn">Add New Product</button>
        </div>
      </div>
      
      <table className="products-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, i) => (
            <tr key={i}>
              <td>
                <div className="product-info">
                  <div className="product-image"></div>
                  <span>Product {i+1}</span>
                </div>
              </td>
              <td>Category {i % 3 === 0 ? 'Food' : i % 3 === 1 ? 'Toys' : 'Accessories'}</td>
              <td>${(i+10).toFixed(2)}</td>
              <td>{i * 5 + 10}</td>
              <td>
                <span className={`status-badge ${i % 4 === 0 ? 'out-of-stock' : 'in-stock'}`}>
                  {i % 4 === 0 ? 'Out of Stock' : 'In Stock'}
                </span>
              </td>
              <td>
                <div className="table-actions">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;