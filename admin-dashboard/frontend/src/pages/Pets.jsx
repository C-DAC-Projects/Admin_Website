import React from "react";
import "../styles/pets.css";

const Pets = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Pets Management</h1>
      
      <div className="pets-header">
        <div className="search-bar">
          <input type="text" placeholder="Search pets..." />
          <button>Search</button>
        </div>
        <button className="add-pet-btn">Add New Pet</button>
      </div>
      
      <div className="pets-grid">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="pet-card">
            <div className="pet-image">
              <div className="image-placeholder"></div>
            </div>
            <div className="pet-info">
              <h3>Pet Name {i+1}</h3>
              <p>Species: Dog</p>
              <p>Breed: Golden Retriever</p>
              <p>Age: {i+2} years</p>
              <div className="pet-actions">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;