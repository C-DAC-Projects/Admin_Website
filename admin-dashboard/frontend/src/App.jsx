import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Pets from "./pages/Pets";
import Products from "./pages/Products";
import PendingProductOrders from "./pages/PendingProductOrders";
import PendingPetOrders from "./pages/PendingPetOrders";
import AddProducts from "./pages/AddProducts";
import VendorApprovals from "./pages/VendorApprovals";
import "./styles/global.css";

// Layout component that includes Sidebar
const Layout = ({ children, isMobile, sidebarOpen, toggleSidebar }) => (
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
      {children}
    </div>
  </div>
);

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
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        
        <Route 
          path="/dashboard" 
          element={
            <Layout isMobile={isMobile} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
              <Dashboard />
            </Layout>
          } 
        />
        
        <Route 
          path="/admin/pets" 
          element={
            <Layout isMobile={isMobile} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
              <Pets />
            </Layout>
          } 
        />
        
        <Route 
          path="/admin/products" 
          element={
            <Layout isMobile={isMobile} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
              <Products />
            </Layout>
          } 
        />
        
        <Route 
          path="/admin/orders" 
          element={
            <Layout isMobile={isMobile} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
              <PendingProductOrders />
            </Layout>
          } 
        />
        
        <Route 
          path="/admin/orders/pets" 
          element={
            <Layout isMobile={isMobile} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
              <PendingPetOrders />
            </Layout>
          } 
        />
        
        <Route 
          path="/admin/products/add" 
          element={
            <Layout isMobile={isMobile} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
              <AddProducts />
            </Layout>
          } 
        />
        
        <Route 
          path="/admin/vendors" 
          element={
            <Layout isMobile={isMobile} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
              <VendorApprovals />
            </Layout>
          } 
        />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;