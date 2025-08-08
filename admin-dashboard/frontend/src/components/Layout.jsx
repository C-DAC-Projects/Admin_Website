import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Sidebar from './Sidebar';
import '../styles/layout.css';

const Layout = ({ isMobile, sidebarOpen, toggleSidebar }) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="layout">
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar} 
        isMobile={isMobile}
      />
      
      <div className={`main-content ${sidebarOpen ? '' : 'collapsed'}`}>
        {/* Mobile menu button */}
        {isMobile && (
          <button className="mobile-menu-btn" onClick={toggleSidebar}>
            ☰
          </button>
        )}
        
        {/* Top navigation bar */}
        <header className="topbar">
          <div className="topbar-left">
            <h1>Admin Dashboard</h1>
          </div>
          
          <div className="topbar-right">
            {currentUser ? (
              <div className="user-info">
                <span className="user-name">{currentUser.name}</span>
                <div className="user-avatar">
                  {currentUser.name.charAt(0)}
                </div>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="login-btn">
                Login
              </Link>
            )}
          </div>
        </header>

        {/* Main content area */}
        <main className="content">
          <Outlet /> {/* ✅ Required to render nested route content */}
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Pet Adoption Admin Dashboard</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
