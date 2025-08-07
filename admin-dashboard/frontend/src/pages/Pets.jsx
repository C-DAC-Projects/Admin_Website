import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate(); // ✅ Added
  const [pets, setPets] = useState([
    {
      id: 1,
      name: 'Bruno',
      age: 2,
      category: 'Dog',
      gender: 'Male',
    },
    {
      id: 2,
      name: 'Kitty',
      age: 1,
      category: 'Cat',
      gender: 'Female',
    },
  ]);

  const handleAddPet = () => {
    const newPet = {
      id: pets.length + 1,
      name: 'New Pet',
      age: 3,
      category: 'Rabbit',
      gender: 'Male',
    };
    setPets([...pets, newPet]);
  };

  const handleEdit = (id) => {
    // ✅ Navigate instead of alert
    navigate(`/admin/pets/edit/${id}`);
  };

  const handleDelete = (id) => {
    const updatedPets = pets.filter((pet) => pet.id !== id);
    setPets(updatedPets);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Pet List</h2>
      <button onClick={handleAddPet}>Add New Pet</button>
      <table border="1" cellPadding="10" style={{ marginTop: '20px', width: '100%' }}>
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
                <button onClick={() => handleEdit(pet.id)}>Edit</button>
                <button onClick={() => handleDelete(pet.id)} style={{ marginLeft: '10px' }}>Delete</button>
              </td>
            </tr>
          ))}
          {pets.length === 0 && (
            <tr>
              <td colSpan="6" align="center">No pets available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
