import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [patientName, setPatientName] = useState('');
  const [patientAddress, setPatientAddress] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [dateOfService, setDateOfService] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [billPicture, setBillPicture] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const billData = {
      patientName,
      patientAddress,
      hospitalName,
      dateOfService,
      billAmount,
      billPicture,
    };

    onSubmit(billData);

    setPatientName('');
    setPatientAddress('');
    setHospitalName('');
    setDateOfService('');
    setBillAmount('');
    setBillPicture(null);
    setSuccessMessage('Bill added successfully!');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBillPicture(file);
  };

  return (
    <div>
      <h2>Add New Bill</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="patientName">Patient Name</label>
          <input
            type="text"
            id="patientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="patientAddress">Patient Address</label>
          <input
            type="text"
            id="patientAddress"
            value={patientAddress}
            onChange={(e) => setPatientAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hospitalName">Hospital Name</label>
          <input
            type="text"
            id="hospitalName"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfService">Date of Service</label>
          <input
            type="date"
            id="dateOfService"
            value={dateOfService}
            onChange={(e) => setDateOfService(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="billAmount">Bill Amount</label>
          <input
            type="number"
            id="billAmount"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="billPicture">Bill Picture</label>
          <input type="file" id="billPicture" accept="image/*" onChange={handleFileChange} />
        </div>
        <button type="submit">Add Bill</button>
      </form>
    </div>
  );
};

export default Form;
