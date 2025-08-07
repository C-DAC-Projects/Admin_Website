import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/product-form.css";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stockQuantity: "",
    description: "",
    categoryId: "",
    petTypeId: "",
    available: true
  });

  const [categories, setCategories] = useState([]);
  const [petTypes, setPetTypes] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    // Mock data
    setCategories([
      { id: 1, name: "Food" },
      { id: 2, name: "Toys" },
      { id: 3, name: "Accessories" }
    ]);
    setPetTypes([
      { id: 1, name: "Dog" },
      { id: 2, name: "Cat" },
      { id: 3, name: "Bird" }
    ]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "stockQuantity"
          ? Number(value)
          : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("File must be an image and less than 10MB.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("stockQuantity", product.stockQuantity);
    formData.append("description", product.description);
    formData.append("categoryId", product.categoryId);
    formData.append("petTypeId", product.petTypeId);
    formData.append("available", product.available);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    // Simulate submission
    console.log("Submitted Product (FormData):");
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": ", pair[1]);
    }

    navigate("/admin/products");
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Add New Product</h1>

      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label>Product Name *</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Category *</label>
            <select
              name="categoryId"
              value={product.categoryId}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Pet Type</label>
            <select
              name="petTypeId"
              value={product.petTypeId}
              onChange={handleChange}
            >
              <option value="">Any Pet</option>
              {petTypes.map((pt) => (
                <option key={pt.id} value={pt.id}>{pt.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Price ($) *</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />
          </div>

          <div className="form-group">
            <label>Stock Quantity *</label>
            <input
              type="number"
              name="stockQuantity"
              value={product.stockQuantity}
              onChange={handleChange}
              min="0"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <div className="form-group">
          <label>Product Images</label>
          <div className="image-upload-box">
            <input
              type="file"
              accept="image/*"
              id="imageInput"
              onChange={handleImageChange}
              hidden
            />
            <label htmlFor="imageInput" className="upload-area">
              <div className="upload-text">
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>+</div>
                <p>Click to upload or drag and drop</p>
                <p>PNG, JPG, GIF up to 10MB</p>
              </div>
            </label>
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" style={{ maxWidth: "200px", marginTop: "10px" }} />
              </div>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button type="button" onClick={() => navigate("/admin/products")}>
            Cancel
          </button>
          <button type="submit">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
