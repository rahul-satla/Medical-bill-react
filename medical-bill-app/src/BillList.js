import React from 'react';
import { Link } from 'react-router-dom';

const BillList = ({ bills, onDelete }) => {
  return (
    <div>
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
                <button className="delete-button" onClick={() => onDelete(index)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BillList;
