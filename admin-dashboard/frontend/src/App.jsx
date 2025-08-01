import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./styles/global.css";

// Create placeholder components for other pages
const Pets = () => <div className="dashboard-container"><h1>Pets Management</h1></div>;
const Products = () => <div className="dashboard-container"><h1>Products Management</h1></div>;
const PendingProductOrders = () => <div className="dashboard-container"><h1>Pending Product Orders</h1></div>;
const PendingPetOrders = () => <div className="dashboard-container"><h1>Pending Pet Orders</h1></div>;
const AddProducts = () => <div className="dashboard-container"><h1>Add Products</h1></div>;
const VendorApprovals = () => <div className="dashboard-container"><h1>Vendor Approvals</h1></div>;

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <div className="layout">
              <Sidebar 
                isOpen={sidebarOpen} 
                toggleSidebar={toggleSidebar} 
                isMobile={isMobile}
              />
              <div className="main-content">
                {isMobile && (
                  <button className="mobile-menu-btn" onClick={toggleSidebar}>
                    ☰
                  </button>
                )}
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/admin/pets" element={<Pets />} />
                  <Route path="/admin/products" element={<Products />} />
                  <Route path="/admin/orders" element={<PendingProductOrders />} />
                  <Route path="/admin/orders/pets" element={<PendingPetOrders />} />
                  <Route path="/admin/products/add" element={<AddProducts />} />
                  <Route path="/admin/vendors" element={<VendorApprovals />} />
                  <Route path="*" element={<Dashboard />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;