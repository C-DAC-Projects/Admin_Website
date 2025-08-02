import React from "react";
import "../styles/add-products.css";

const AddProducts = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Add New Product</h1>
      
      <div className="product-form-container">
        <form className="product-form">
          <div className="form-section">
            <h3>Product Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" placeholder="Enter product name" />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select>
                  <option>Select Category</option>
                  <option>Food</option>
                  <option>Toys</option>
                  <option>Accessories</option>
                  <option>Grooming</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Price ($)</label>
                <input type="number" placeholder="0.00" step="0.01" />
              </div>
              <div className="form-group">
                <label>Stock Quantity</label>
                <input type="number" placeholder="Enter quantity" />
              </div>
            </div>
            
            <div className="form-group">
              <label>Description</label>
              <textarea placeholder="Enter product description" rows="4"></textarea>
            </div>
          </div>
          
          <div className="form-section">
            <h3>Product Images</h3>
            <div className="image-upload-area">
              <div className="upload-placeholder">
                <span>+</span>
                <p>Click to upload or drag and drop</p>
                <p>PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
            <div className="image-preview-grid">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="image-preview">
                  <div className="preview-placeholder"></div>
                  <button className="remove-image">×</button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="form-section">
            <h3>Additional Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Brand</label>
                <input type="text" placeholder="Enter brand name" />
              </div>
              <div className="form-group">
                <label>Weight (kg)</label>
                <input type="number" placeholder="0.00" step="0.01" />
              </div>
            </div>
            
            <div className="form-group">
              <label>Tags</label>
              <div className="tags-input">
                <input type="text" placeholder="Add tags (press Enter)" />
                <div className="tags-container">
                  <span className="tag">Dog <button>×</button></span>
                  <span className="tag">Premium <button>×</button></span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="form-actions">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="submit-btn">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;