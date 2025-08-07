import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/EditPet.css';

const EditPet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    category: '',
    description: '',
    price: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/pets/${id}`)
      .then((res) => {
        const data = res.data;
        setFormData({
          name: data.name || '',
          age: data.age || '',
          gender: data.gender || '',
          category: data.category || '',
          description: data.description || '',
          price: data.price || '',
        });
        setPreview(`http://localhost:8080/${data.image}`); // if image path is relative
      })
      .catch((err) => {
        alert("Failed to fetch pet data");
        console.error(err);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });
    if (imageFile) {
      payload.append('image', imageFile);
    }

    axios.put(`http://localhost:8080/api/pets/${id}`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(() => {
      alert("Pet updated successfully!");
      navigate('/pets');
    }).catch((err) => {
      alert("Failed to update pet");
      console.error(err);
    });
  };

  return (
    <div className="edit-container">
      <h2>Edit Pet Information</h2>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input name="name" value={formData.name} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input name="age" value={formData.age} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleInputChange}>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Category:</label>
          <input name="category" value={formData.category} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label>Price (₹):</label>
          <input name="price" type="number" value={formData.price} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" />
          {preview && <img src={preview} alt="preview" className="preview-image" />}
        </div>

        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPet;
