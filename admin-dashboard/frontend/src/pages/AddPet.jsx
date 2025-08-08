import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addpet.css";

const AddPet = () => {
  const navigate = useNavigate();
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
  const [primaryImageIndex, setPrimaryImageIndex] = useState(0);
  const [breeds, setBreeds] = useState([]);

  const [petTypes, setPetTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Mock data - replace with API calls
  useEffect(() => {

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
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      setImages(filesArray);
    }
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      console.log("Form Data:", formData);
      console.log("Images:", images);
      console.log("Primary Image Index:", primaryImageIndex);
      setLoading(false);
      navigate("/admin/pets");
    }, 1500);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Add New Pet</h1>

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
                  placeholder="Enter pet name"

                  required
                />
              </div>
              <div className="form-group">
                <label>Age (Month)</label>

                <input 
                  type="number" 

                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="0"
                  max="30"

                  placeholder="Enter age" 
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

                <label>Price (Rs)</label>
                <input 
                  type="number" 
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  placeholder="0.00" 
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
                placeholder="Enter pet description"
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
              {loading ? "Adding Pet..." : "Add Pet"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default AddPet;

