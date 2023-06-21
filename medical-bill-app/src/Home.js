import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ bills }) => {
  return (
    <div className="container">
      <header className="header">
        <h1>Medical Bill App</h1>
      </header>

      <nav className="navbar">
        <h3>Navigation</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Add Bill</Link>
          </li>
        </ul>
      </nav>

      <div className="bill-list">
        <h2>Uploaded Bills</h2>
        {bills.length === 0 ? (
          <p>No bills uploaded yet.</p>
        ) : (
          <ul>
            {bills.map((bill, index) => (
              <li key={index}>
                <div className="bill-info">
                  <p>Patient Name: {bill.patientName}</p>
                  <p>Date of Service: {bill.dateOfService}</p>
                  <p>Bill Amount: {bill.billAmount}</p>
                </div>
                <div className="actions">
                  <Link to={`/summary/${index}`}>View Details</Link>
                  <button className="delete-button">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
