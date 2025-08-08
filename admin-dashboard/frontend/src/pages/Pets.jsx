import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pets.css';

function App() {
  const navigate = useNavigate();
  const [pets, setPets] = useState([
    { id: 1, name: 'Bruno', age: 2, category: 'Dog', gender: 'Male' },
    { id: 2, name: 'Kitty', age: 1, category: 'Cat', gender: 'Female' },
  ]);

  const handleAddPet = () => {
    navigate("/admin/pets/add"); // ✅ Goes to AddPet page
  };

  const handleEdit = (id) => {
    navigate(`/admin/pets/edit/${id}`);
  };

  const handleDelete = (id) => {
    const updatedPets = pets.filter((pet) => pet.id !== id);
    setPets(updatedPets);
  };

  return (
    <div className="pet-list-container">
      <h2 className="pet-list-title">Pet List</h2>
      <button className="add-pet-btn" onClick={handleAddPet}>Add New Pet</button>

      <table className="pet-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Category</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.id}</td>
              <td>{pet.name}</td>
              <td>{pet.age}</td>
              <td>{pet.category}</td>
              <td>{pet.gender}</td>
              <td>
                <button className="action-btn edit-btn" onClick={() => handleEdit(pet.id)}>Edit</button>
                <button className="action-btn delete-btn" onClick={() => handleDelete(pet.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {pets.length === 0 && (
            <tr>
              <td className="empty-row" colSpan="6">No pets available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
