import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/products.css";

const Products = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    {
      _id: "1",
      name: "Dog Food",
      category: "Food",
      price: 25.99,
      stock: 12,
      image: "https://via.placeholder.com/60",
    },
    {
      _id: "2",
      name: "Cat Toy",
      category: "Toys",
      price: 10.5,
      stock: 0,
      image: "https://via.placeholder.com/60",
    },
    {
      _id: "3",
      name: "Bird Cage",
      category: "Accessories",
      price: 99.99,
      stock: 5,
      image: "https://via.placeholder.com/60",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updated = products.filter((p) => p._id !== productId);
      setProducts(updated);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-container">
      <h1 className="page-title">Products Management</h1>

      <div className="products-controls">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Toys">Toys</option>
          <option value="Accessories">Accessories</option>
        </select>

        <button className="add-product-btn" onClick={() => navigate("/add-product")}>
          Add New Product
        </button>
      </div>

      <table className="products-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product._id}>
              <td>
                <div className="product-info">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <span>{product.name}</span>
                </div>
              </td>
              <td>{product.category}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>
                <span className={`status-badge ${product.stock > 0 ? "in-stock" : "out-of-stock"}`}>
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </td>
              <td>
                <button onClick={() => navigate(`/admin/products/edit/${product._id}`)}>Edit</button>
                <button onClick={() => handleDelete(product._id)} style={{ marginLeft: "8px" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
