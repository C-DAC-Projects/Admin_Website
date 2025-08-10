import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/EditPet.css";
import { getPetById, updatePet } from "../services/petService";

const EditPet = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "MALE",
    price: "",
    description: "",
    breedId: "",
    petTypeId: "",
  });

  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [petTypes, setPetTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    getPetById(id)
      .then((pet) => {

    // Fetch pet data
    axios
      .get(`http://localhost:8080/api/pets/${id}`)
      .then((res) => {
        const pet = res.data;

        setFormData({
          name: pet.name || "",
          age: pet.age || "",
          gender: pet.gender || "MALE",
          price: pet.price || "",
          description: pet.description || "",
          breedId: pet.breedId || "",
          petTypeId: pet.petTypeId || "",
        });
        if (pet.images && Array.isArray(pet.images)) {
          setExistingImages(pet.images);
        }
      })
      .catch(() => {
        alert("Failed to fetch pet details");
      });

    // Mock data
    setPetTypes([
      { id: 1, name: "Dog" },
      { id: 2, name: "Cat" },
      { id: 3, name: "Bird" },
      { id: 4, name: "Fish" },
      { id: 5, name: "Rabbit" },
      { id: 6, name: "Hamster" },
      { id: 7, name: "Turtle" },
      { id: 8, name: "Guinea Pig" },
    ]);

    setBreeds([
      { id: 1, name: "Labrador Retriever", petTypeId: 1 },
      { id: 2, name: "German Shepherd", petTypeId: 1 },
      { id: 3, name: "Pomeranian", petTypeId: 1 },
      { id: 4, name: "Persian", petTypeId: 2 },
      { id: 5, name: "Siamese", petTypeId: 2 },
      { id: 6, name: "Parakeet", petTypeId: 3 },
      { id: 7, name: "Cockatiel", petTypeId: 3 },
      { id: 8, name: "Goldfish", petTypeId: 4 },
      { id: 9, name: "Betta", petTypeId: 4 },
      { id: 10, name: "Holland Lop", petTypeId: 5 },
      { id: 11, name: "Lionhead", petTypeId: 5 },
      { id: 12, name: "Syrian Hamster", petTypeId: 6 },
      { id: 13, name: "Dwarf Hamster", petTypeId: 6 },
      { id: 14, name: "Red-Eared Slider", petTypeId: 7 },
      { id: 15, name: "Russian Tortoise", petTypeId: 7 },
      { id: 16, name: "Abyssinian Guinea Pig", petTypeId: 8 },
      { id: 17, name: "American Guinea Pig", petTypeId: 8 },
      { id: 18, name: "Beagle", petTypeId: 1 },
    ]);
  }, [id]);

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setImages(filesArray);
  };

  const handleRemoveNewImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = new FormData();
      payload.append("Name", formData.name);
      payload.append("Age", formData.age);
      payload.append("Gender", formData.gender);
      payload.append("Price", formData.price);
      payload.append("Description", formData.description);
      payload.append("BreedId", formData.breedId);
      images.forEach((img) => payload.append("Images", img));

      await updatePet(id, payload);
      alert("Pet updated successfully!");
      navigate("/admin/pets");
    } catch {
      alert("Failed to update pet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-pet-container">
      <h2>Edit Pet</h2>
      <form className="edit-pet-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Pet Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>Age (Months):</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        </div>

        <div className="form-row">
          <label>Price (Rs):</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>Pet Type:</label>
          <select name="petTypeId" value={formData.petTypeId} onChange={handleChange} required>
            <option value="">Select Pet Type</option>
            {petTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <label>Breed:</label>
          <select name="breedId" value={formData.breedId} onChange={handleChange} required>
            <option value="">Select Breed</option>
            {breeds
              .filter((b) => b.petTypeId === Number(formData.petTypeId))
              .map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
          </select>
        </div>

        {existingImages.length > 0 && (
          <div className="image-preview">
            <h4>Existing Images</h4>
            {existingImages.map((img, idx) => (
              <img key={idx} src={`/${img.image_url}`} alt="existing" className="preview-img" />
            ))}
          </div>
        )}

        <div className="form-row">
          <label>Upload New Images:</label>
          <input type="file" multiple onChange={handleImageChange} />
        </div>

        <div className="image-preview">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={URL.createObjectURL(image)} alt="preview" />
              <button type="button" onClick={() => handleRemoveNewImage(index)}>
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="button-group">
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Updating..." : "Update Pet"}
          </button>
          <button type="button" className="btn-secondary" onClick={() => navigate("/admin/pets")}>
            Cancel
          </button>
        </div>
      </form>


    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    images.forEach((image, idx) => {
      payload.append("images", image);
      if (idx === primaryImageIndex) {
        payload.append("primaryImageIndex", idx);
      }
    });

    axios
      .put(`http://localhost:8080/api/pets/${id}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
                <label>Age (Months)</label>
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
                <label>Price (₹)</label>
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
                  {petTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
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
                    .filter((breed) => breed.petTypeId == formData.petTypeId)
                    .map((breed) => (
                      <option key={breed.id} value={breed.id}>
                        {breed.name}
                      </option>
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
                        className={`primary-btn ${
                          primaryImageIndex === index ? "active" : ""
                        }`}
                      >
                        {primaryImageIndex === index
                          ? "Primary"
                          : "Set Primary"}
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
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Saving Changes..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPet;
