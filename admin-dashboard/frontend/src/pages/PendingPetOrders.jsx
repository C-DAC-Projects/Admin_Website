import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "../styles/orders.css";
import { useNavigate } from "react-router-dom";
// import api from "../utils/axiosSetup"; // Commented out if not needed

const PendingPetOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Toggle this to true if you want to use dummy data
  const useDummyData = true;

  const dummyOrders = [
    {
      id: 1,
      orderNumber: "PET1001",
      createdAt: "2025-08-01T10:00:00Z",
      status: "PENDING",
      customerName: "John Doe",
      customerEmail: "john@example.com",
      customerPhone: "9876543210",
      pet: {
        name: "Bruno",
        breed: { name: "Labrador" },
        price: 5500
      }
    },
    {
      id: 2,
      orderNumber: "PET1002",
      createdAt: "2025-08-03T14:30:00Z",
      status: "PROCESSING",
      customerName: "Priya Sharma",
      customerEmail: "priya@example.com",
      customerPhone: "9865312422",
      pet: {
        name: "Whiskers",
        breed: { name: "Persian Cat" },
        price: 3200
      }
    },
    {
      id: 3,
      orderNumber: "PET1003",
      createdAt: "2025-08-06T09:15:00Z",
      status: "COMPLETED",
      customerName: "Amit Patel",
      customerEmail: "amit@example.com",
      customerPhone: "9812345678",
      pet: {
        name: "Tweety",
        breed: { name: "Parrot" },
        price: 900
      }
    }
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);

        if (useDummyData) {
          setOrders(dummyOrders);
        } else {
          // const response = await api.get("/api/orders/pets");
          // setOrders(response.data.orders || []);
          toast.warning("Real API not connected. Showing dummy data.");
        }
      } catch (error) {
        console.error("API error:", error);
        toast.error("Failed to load pet orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div className="page-container">Loading orders...</div>;

  return (
    <div className="page-container">
      <h1 className="page-title">Pending Pet Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <div className="orders-table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Order No</th>
                <th>Date</th>
                <th>Status</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Pet</th>
                <th>Breed</th>
                <th>Price</th>
                <th>Details</th>
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
                  <td>{order.pet?.name || "-"}</td>
                  <td>{order.pet?.breed?.name || "-"}</td>
                  <td>₹{order.pet?.price?.toFixed(2) || "0.00"}</td>
                  <td>
                    <button onClick={() => navigate(`/pet-order-details/${order.id}`)}>
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

export default PendingPetOrders;
