<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/addpet.css";
=======
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/EditPet.css';
>>>>>>> ea58717 (front end updated)

const EditPet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
<<<<<<< HEAD

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "MALE",
    price: "",
    description: "",
    available: true,
    breedId: "",
    petTypeId: ""
  });

  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]); // From DB
  const [primaryImageIndex, setPrimaryImageIndex] = useState(0);
  const [breeds, setBreeds] = useState([]);
  const [petTypes, setPetTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch pet data
    axios.get(`http://localhost:8080/api/pets/${id}`)
      .then((res) => {
        const pet = res.data;
        setFormData({
          name: pet.name || "",
          age: pet.age || "",
          gender: pet.gender || "MALE",
          price: pet.price || "",
          description: pet.description || "",
          available: pet.available || false,
          breedId: pet.breedId || "",
          petTypeId: pet.petTypeId || ""
        });

        if (pet.images && Array.isArray(pet.images)) {
          setExistingImages(pet.images); // Assuming pet.images is array of image URLs or paths
        }
=======
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
>>>>>>> ea58717 (front end updated)
      })
      .catch((err) => {
        alert("Failed to fetch pet data");
        console.error(err);
      });
<<<<<<< HEAD

    // Mock data for breed & type (replace with actual API)
    const mockPetTypes = [
      { id: 1, name: "Dog" },
      { id: 2, name: "Cat" },
      { id: 3, name: "Bird" },
      { id: 4, name: "Fish" },
    ];

    const mockBreeds = [
      { id: 1, name: "Golden Retriever", petTypeId: 1 },
      { id: 2, name: "Labrador", petTypeId: 1 },
      { id: 3, name: "Siamese", petTypeId: 2 },
      { id: 4, name: "Persian", petTypeId: 2 },
      { id: 5, name: "Parrot", petTypeId: 3 },
    ];

    setPetTypes(mockPetTypes);
    setBreeds(mockBreeds);
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleImageChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setImages(filesArray);
  };

  const handleSetPrimary = (index) => {
    setPrimaryImageIndex(index);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    if (primaryImageIndex === index) {
      setPrimaryImageIndex(0);
    } else if (primaryImageIndex > index) {
      setPrimaryImageIndex(primaryImageIndex - 1);
    }
=======
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
>>>>>>> ea58717 (front end updated)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    setLoading(true);

=======
>>>>>>> ea58717 (front end updated)
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });
<<<<<<< HEAD

    images.forEach((image, idx) => {
      payload.append("images", image);
      if (idx === primaryImageIndex) {
        payload.append("primaryImageIndex", idx);
      }
    });

    axios.put(`http://localhost:8080/api/pets/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(() => {
        alert("Pet updated successfully!");
        navigate("/admin/pets");
      })
      .catch((err) => {
        alert("Failed to update pet");
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Edit Pet</h1>

      <div className="product-form-container">
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Pet Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Pet Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Age (years)</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="0"
                  max="30"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Gender</label>
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="gender"
                      value="MALE"
                      checked={formData.gender === "MALE"}
                      onChange={handleChange}
                    />
                    Male
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="gender"
                      value="FEMALE"
                      checked={formData.gender === "FEMALE"}
                      onChange={handleChange}
                    />
                    Female
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Price ($)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-option">
                <input
                  type="checkbox"
                  name="available"
                  checked={formData.available}
                  onChange={handleChange}
                />
                Available for adoption
              </label>
            </div>
          </div>

          <div className="form-section">
            <h3>Classification</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Pet Type</label>
                <select
                  name="petTypeId"
                  value={formData.petTypeId || ""}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Type</option>
                  {petTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Breed</label>
                <select
                  name="breedId"
                  value={formData.breedId || ""}
                  onChange={handleChange}
                  required
                  disabled={!formData.petTypeId}
                >
                  <option value="">Select Breed</option>
                  {breeds
                    .filter(breed => breed.petTypeId == formData.petTypeId)
                    .map(breed => (
                      <option key={breed.id} value={breed.id}>{breed.name}</option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Pet Images</h3>

            <div className="image-upload-area">
              <label className="upload-placeholder">
                <input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  accept="image/*"
                  style={{ display: "none" }}
                />
                <span className="upload-icon">+</span>
                <p>Click to upload or drag and drop</p>
                <p>PNG, JPG, GIF up to 10MB</p>
              </label>
            </div>

            {existingImages.length > 0 && (
              <div className="image-preview-grid">
                {existingImages.map((img, index) => (
                  <div key={index} className="image-preview">
                    <img
                      src={`http://localhost:8080/${img}`}
                      alt={`Existing ${index}`}
                      className="preview-image"
                    />
                  </div>
                ))}
              </div>
            )}

            {images.length > 0 && (
              <div className="image-preview-grid">
                {images.map((image, index) => (
                  <div key={index} className="image-preview">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index}`}
                      className="preview-image"
                    />
                    <div className="image-actions">
                      <button
                        type="button"
                        onClick={() => handleSetPrimary(index)}
                        className={`primary-btn ${primaryImageIndex === index ? 'active' : ''}`}
                      >
                        {primaryImageIndex === index ? 'Primary' : 'Set Primary'}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="remove-image"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/admin/pets")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? "Saving Changes..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
=======
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
>>>>>>> ea58717 (front end updated)
    </div>
  );
};

export default EditPet;
