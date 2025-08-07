import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "../styles/orders.css";
import { useNavigate } from "react-router-dom";
// import api from "../utils/axiosSetup"; // Uncomment for real API

const PendingProductOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const useDummyData = true;

  const dummyOrders = [
    {
      id: 1,
      orderNumber: "PROD-001",
      createdAt: "2025-08-01T10:00:00Z",
      status: "PENDING",
      customerName: "John Doe",
      customerEmail: "john@example.com",
      customerPhone: "9876543210",
      totalAmount: 1450,
      items: [
        { productName: "Dog Food", quantity: 2, price: 500 },
        { productName: "Chew Toy", quantity: 1, price: 450 }
      ]
    },
    {
      id: 2,
      orderNumber: "PROD-002",
      createdAt: "2025-08-03T14:30:00Z",
      status: "PROCESSING",
      customerName: "Priya Sharma",
      customerEmail: "priya@example.com",
      customerPhone: "9865312422",
      totalAmount: 899,
      items: [
        { productName: "Cat Litter", quantity: 1, price: 400 },
        { productName: "Cat Treats", quantity: 2, price: 249.5 }
      ]
    },
    {
      id: 3,
      orderNumber: "PROD-003",
      createdAt: "2025-08-06T09:15:00Z",
      status: "COMPLETED",
      customerName: "Amit Patel",
      customerEmail: "amit@example.com",
      customerPhone: "9812345678",
      totalAmount: 1000,
      items: [
        { productName: "Bird Cage", quantity: 1, price: 1000 }
      ]
    }
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);

        if (useDummyData) {
          setOrders(dummyOrders);
        } else {
          // const response = await api.get("/api/orders/products");
          // setOrders(response.data.orders || []);
          toast.warning("Dummy data displayed. Connect real API to fetch data.");
        }
      } catch (error) {
        console.error("API error:", error);
        toast.error("Failed to load product orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div className="page-container">Loading orders...</div>;

  return (
    <div className="page-container">
      <h1 className="page-title">Pending Product Orders</h1>

      {orders.length === 0 ? (
        <p>No product orders found.</p>
      ) : (
        <div className="orders-table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Order No</th>
                <th>Date</th>
                <th>Status</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Items</th>
                <th>Total (₹)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id}>
                  <td>{index + 1}</td>
                  <td>{order.orderNumber}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>{order.status}</td>
                  <td>{order.customerName}</td>
                  <td>{order.customerEmail}</td>
                  <td>{order.customerPhone}</td>
                  <td>
                    {order.items?.map((item, i) => (
                      <div key={i}>
                        • {item.productName} x{item.quantity} (₹{item.price})
                      </div>
                    ))}
                  </td>
                  <td>₹{order.totalAmount?.toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/order-details/${order.id}`)}
                      className="view-btn"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PendingProductOrders;
