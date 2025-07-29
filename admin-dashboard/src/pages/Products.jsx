import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Dog Food", price: 250, stock: 10 },
    { id: 2, name: "Cat Toy", price: 150, stock: 5 },
    { id: 3, name: "Pet Shampoo", price: 300, stock: 8 },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Inventory</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (₹)</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button onClick={() => deleteProduct(p.id)}>Delete</button>
                {/* You can add Edit button here too */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
