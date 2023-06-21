import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';

const Summary = ({ bills }) => {
  const { id } = useParams();
  const bill = bills[id];

  return (
    <div>
      <h2>Summary</h2>
      <p>Patient Name: {bill.patientName}</p>
      <p>Patient Address: {bill.patientAddress}</p>
      <p>Hospital Name: {bill.hospitalName}</p>
      <p>Date of Service: {bill.dateOfService}</p>
      <p>Bill Amount: {bill.billAmount}</p>
      <Link to="/">Back to Bill List</Link>
    </div>
  );
};

export default Summary;
