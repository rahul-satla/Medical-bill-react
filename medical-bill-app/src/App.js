import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Form from './Form';
import Summary from './Summary';
import BillList from './BillList';
import './App.css';

const App = () => {
  const [bills, setBills] = useState([]);

  const handleFormSubmit = (data) => {
    setBills([...bills, data]);
  };

  const handleBillDelete = (index) => {
    const updatedBills = bills.filter((_, i) => i !== index);
    setBills(updatedBills);
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <h1>Medical Bill App</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Add New Bill</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<BillList bills={bills} onDelete={handleBillDelete} />} />
          <Route path="/form" element={<Form onSubmit={handleFormSubmit} />} />
          <Route path="/summary/:id" element={<Summary bills={bills} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
