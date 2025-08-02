import React from "react";
import "../styles/orders.css";

const PendingPetOrders = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Pending Pet Orders</h1>
      
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
            <option>Completed</option>
          </select>
        </div>
      </div>
      
      <div className="orders-grid">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="order-card">
            <div className="order-header">
              <div className="order-id">Order #PET{i+200}</div>
              <div className="order-date">Aug {i+2}, 2025</div>
              <div className={`order-status ${i % 3 === 0 ? 'pending' : i % 3 === 1 ? 'processing' : 'completed'}`}>
                {i % 3 === 0 ? 'Pending' : i % 3 === 1 ? 'Processing' : 'Completed'}
              </div>
            </div>
            
            <div className="order-details">
              <div className="customer-info">
                <h4>Customer Information</h4>
                <p>Jane Smith</p>
                <p>jane.smith@example.com</p>
                <p>+1 (555) 987-6543</p>
              </div>
              
              <div className="order-summary">
                <h4>Pet Information</h4>
                <div className="pet-details">
                  <div className="pet-name">Pet Name {i+1}</div>
                  <div className="pet-breed">Breed: Labrador Retriever</div>
                  <div className="pet-price">$450.00</div>
                </div>
                <div className="order-total">
                  <span>Total:</span>
                  <span>$450.00</span>
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

export default PendingPetOrders;