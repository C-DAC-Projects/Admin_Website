import React from "react";
import "../styles/orders.css";

const PendingProductOrders = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Pending Product Orders</h1>
      
      <div className="orders-controls">
        <div className="search-bar">
          <input type="text" placeholder="Search orders..." />
          <button>Search</button>
        </div>
        <div className="filter-section">
          <select>
            <option>All Status</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Shipped</option>
          </select>
        </div>
      </div>
      
      <div className="orders-grid">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="order-card">
            <div className="order-header">
              <div className="order-id">Order #ORD{i+100}</div>
              <div className="order-date">Aug {i+1}, 2025</div>
              <div className={`order-status ${i % 3 === 0 ? 'pending' : i % 3 === 1 ? 'processing' : 'shipped'}`}>
                {i % 3 === 0 ? 'Pending' : i % 3 === 1 ? 'Processing' : 'Shipped'}
              </div>
            </div>
            
            <div className="order-details">
              <div className="customer-info">
                <h4>Customer Information</h4>
                <p>John Doe</p>
                <p>john.doe@example.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
              
              <div className="order-summary">
                <h4>Order Summary</h4>
                <div className="order-items">
                  <div className="item">
                    <div className="item-name">Product {i+1}</div>
                    <div className="item-qty">Qty: {i+2}</div>
                    <div className="item-price">$25.99</div>
                  </div>
                  <div className="item">
                    <div className="item-name">Product {i+3}</div>
                    <div className="item-qty">Qty: 1</div>
                    <div className="item-price">$12.99</div>
                  </div>
                </div>
                <div className="order-total">
                  <span>Total:</span>
                  <span>${(38.98).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="order-actions">
              <button>View Details</button>
              <button>Process Order</button>
              <button>Cancel Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingProductOrders;