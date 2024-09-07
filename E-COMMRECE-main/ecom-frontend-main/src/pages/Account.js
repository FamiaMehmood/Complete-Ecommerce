// src/Account.js
import React from 'react';
import './Account.css'; // Import CSS for styling

const Account = () => {
  return (
    <div className="account-container">
      <h1>Account Overview</h1>
      <div className="account-info">
        <div className="account-details">
          <h2>Personal Information</h2>
          <p><strong>Name:</strong>FAMIA MEHMOOD</p>
          <p><strong>Email:</strong>famiamehmood18@gmail.com</p>
          {/* Add more user information as needed */}
        </div>
        <div className="account-actions">
          <button className="btn">Edit Profile</button>
          <button className="btn">Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
