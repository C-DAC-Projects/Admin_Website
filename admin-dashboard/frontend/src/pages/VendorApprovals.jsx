import React from "react";
import "../styles/vendors.css";

const VendorApprovals = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Vendor Approvals</h1>
      
      <div className="vendors-controls">
        <div className="search-bar">
          <input type="text" placeholder="Search vendors..." />
          <button>Search</button>
        </div>
        <div className="filter-section">
          <select>
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>
      
      <div className="vendors-list">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="vendor-card">
            <div className="vendor-header">
              <div className="vendor-info">
                <div className="vendor-avatar"></div>
                <div>
                  <h3>Vendor Business {i+1}</h3>
                  <p>Contact: vendor{i}@example.com</p>
                </div>
              </div>
              <div className={`vendor-status ${i % 3 === 0 ? 'pending' : i % 3 === 1 ? 'approved' : 'rejected'}`}>
                {i % 3 === 0 ? 'Pending Approval' : i % 3 === 1 ? 'Approved' : 'Rejected'}
              </div>
            </div>
            
            <div className="vendor-details">
              <div className="detail-group">
                <label>Business Name</label>
                <p>Vendor Business {i+1}</p>
              </div>
              <div className="detail-group">
                <label>Contact Person</label>
                <p>John Smith</p>
              </div>
              <div className="detail-group">
                <label>Email</label>
                <p>vendor{i}@example.com</p>
              </div>
              <div className="detail-group">
                <label>Phone</label>
                <p>+1 (555) 123-456{i}</p>
              </div>
              <div className="detail-group">
                <label>Registration Date</label>
                <p>Aug {i+1}, 2025</p>
              </div>
              <div className="detail-group">
                <label>Business Type</label>
                <p>{i % 2 === 0 ? 'Individual' : 'Company'}</p>
              </div>
            </div>
            
            <div className="vendor-documents">
              <h4>Documents</h4>
              <div className="documents-grid">
                <div className="document">
                  <div className="doc-icon">📄</div>
                  <div className="doc-name">Business License.pdf</div>
                  <button>View</button>
                </div>
                <div className="document">
                  <div className="doc-icon">📄</div>
                  <div className="doc-name">Tax Certificate.pdf</div>
                  <button>View</button>
                </div>
                <div className="document">
                  <div className="doc-icon">📄</div>
                  <div className="doc-name">ID Proof.pdf</div>
                  <button>View</button>
                </div>
              </div>
            </div>
            
            <div className="vendor-actions">
              {i % 3 === 0 ? (
                <>
                  <button className="approve-btn">Approve</button>
                  <button className="reject-btn">Reject</button>
                </>
              ) : (
                <button className="view-details">View Details</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorApprovals;