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
<<<<<<< HEAD
    petTypeId: ""
  });

  const [images, setImages] = useState([]);
  const [primaryImageIndex, setPrimaryImageIndex] = useState(0);
  const [breeds, setBreeds] = useState([]);
=======
    sellerId: "",
    approvalStatus: "APPROVED",
    adminComments: ""
  });
  
  const [images, setImages] = useState([]);
  const [primaryImageIndex, setPrimaryImageIndex] = useState(0);
  const [breeds, setBreeds] = useState([]);
  const [sellers, setSellers] = useState([]);
>>>>>>> ea58717 (front end updated)
  const [petTypes, setPetTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Mock data - replace with API calls
  useEffect(() => {
<<<<<<< HEAD
=======
    // Simulate API call for pet types
>>>>>>> ea58717 (front end updated)
    const mockPetTypes = [
      { id: 1, name: "Dog" },
      { id: 2, name: "Cat" },
      { id: 3, name: "Bird" },
      { id: 4, name: "Fish" },
    ];
<<<<<<< HEAD

=======
    
    // Simulate API call for sellers
    const mockSellers = [
      { id: 1, name: "John's Pet Shop" },
      { id: 2, name: "Happy Pets Breeders" },
      { id: 3, name: "Premium Pet Suppliers" },
    ];
    
    // Simulate API call for breeds
>>>>>>> ea58717 (front end updated)
    const mockBreeds = [
      { id: 1, name: "Golden Retriever", petTypeId: 1 },
      { id: 2, name: "Labrador", petTypeId: 1 },
      { id: 3, name: "Siamese", petTypeId: 2 },
      { id: 4, name: "Persian", petTypeId: 2 },
      { id: 5, name: "Parrot", petTypeId: 3 },
    ];
<<<<<<< HEAD

    setPetTypes(mockPetTypes);
=======
    
    setPetTypes(mockPetTypes);
    setSellers(mockSellers);
>>>>>>> ea58717 (front end updated)
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
<<<<<<< HEAD

=======
    
>>>>>>> ea58717 (front end updated)
    if (primaryImageIndex === index) {
      setPrimaryImageIndex(0);
    } else if (primaryImageIndex > index) {
      setPrimaryImageIndex(primaryImageIndex - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
<<<<<<< HEAD

=======
    
>>>>>>> ea58717 (front end updated)
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
<<<<<<< HEAD

=======
      
>>>>>>> ea58717 (front end updated)
      <div className="product-form-container">
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Pet Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Pet Name</label>
<<<<<<< HEAD
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter pet name"
=======
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter pet name" 
>>>>>>> ea58717 (front end updated)
                  required
                />
              </div>
              <div className="form-group">
                <label>Age (years)</label>
<<<<<<< HEAD
                <input
                  type="number"
=======
                <input 
                  type="number" 
>>>>>>> ea58717 (front end updated)
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="0"
                  max="30"
<<<<<<< HEAD
                  placeholder="Enter age"
=======
                  placeholder="Enter age" 
>>>>>>> ea58717 (front end updated)
                  required
                />
              </div>
            </div>
<<<<<<< HEAD

=======
            
>>>>>>> ea58717 (front end updated)
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
<<<<<<< HEAD
                <input
                  type="number"
=======
                <input 
                  type="number" 
>>>>>>> ea58717 (front end updated)
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
<<<<<<< HEAD
                  placeholder="0.00"
=======
                  placeholder="0.00" 
>>>>>>> ea58717 (front end updated)
                  required
                />
              </div>
            </div>
<<<<<<< HEAD

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

=======
            
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
            
>>>>>>> ea58717 (front end updated)
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
<<<<<<< HEAD

          <div className="form-section">
            <h3>Classification</h3>
=======
          
          <div className="form-section">
            <h3>Classification & Seller</h3>
>>>>>>> ea58717 (front end updated)
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
<<<<<<< HEAD
          </div>

=======
            
            <div className="form-row">
              <div className="form-group">
                <label>Seller</label>
                <select
                  name="sellerId"
                  value={formData.sellerId || ""}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Seller</option>
                  {sellers.map(seller => (
                    <option key={seller.id} value={seller.id}>{seller.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Approval Status</label>
                <select
                  name="approvalStatus"
                  value={formData.approvalStatus}
                  onChange={handleChange}
                >
                  <option value="PENDING">Pending</option>
                  <option value="APPROVED">Approved</option>
                  <option value="REJECTED">Rejected</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label>Admin Comments</label>
              <textarea 
                name="adminComments"
                value={formData.adminComments}
                onChange={handleChange}
                placeholder="Enter any additional comments" 
                rows="2"
              ></textarea>
            </div>
          </div>
          
>>>>>>> ea58717 (front end updated)
          <div className="form-section">
            <h3>Pet Images</h3>
            <div className="image-upload-area">
              <label className="upload-placeholder">
<<<<<<< HEAD
                <input
                  type="file"
                  multiple
=======
                <input 
                  type="file" 
                  multiple 
>>>>>>> ea58717 (front end updated)
                  onChange={handleImageChange}
                  accept="image/*"
                  style={{ display: "none" }}
                />
                <span className="upload-icon">+</span>
                <p>Click to upload or drag and drop</p>
                <p>PNG, JPG, GIF up to 10MB</p>
              </label>
            </div>
<<<<<<< HEAD

=======
            
>>>>>>> ea58717 (front end updated)
            {images.length > 0 && (
              <div className="image-preview-grid">
                {images.map((image, index) => (
                  <div key={index} className="image-preview">
<<<<<<< HEAD
                    <img
                      src={URL.createObjectURL(image)}
=======
                    <img 
                      src={URL.createObjectURL(image)} 
>>>>>>> ea58717 (front end updated)
                      alt={`Preview ${index}`}
                      className="preview-image"
                    />
                    <div className="image-actions">
<<<<<<< HEAD
                      <button
=======
                      <button 
>>>>>>> ea58717 (front end updated)
                        type="button"
                        onClick={() => handleSetPrimary(index)}
                        className={`primary-btn ${primaryImageIndex === index ? 'active' : ''}`}
                      >
                        {primaryImageIndex === index ? 'Primary' : 'Set Primary'}
                      </button>
<<<<<<< HEAD
                      <button
=======
                      <button 
>>>>>>> ea58717 (front end updated)
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
<<<<<<< HEAD

          <div className="form-actions">
            <button
              type="button"
=======
          
          <div className="form-actions">
            <button 
              type="button" 
>>>>>>> ea58717 (front end updated)
              className="cancel-btn"
              onClick={() => navigate("/admin/pets")}
            >
              Cancel
            </button>
<<<<<<< HEAD
            <button
              type="submit"
=======
            <button 
              type="submit" 
>>>>>>> ea58717 (front end updated)
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

<<<<<<< HEAD
export default AddPet;
=======
export default AddPet;
>>>>>>> ea58717 (front end updated)
