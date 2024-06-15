import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    issueDescription: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError('');
    setSuccessMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(formData.fullName)) {
      setError('Full name should contain only letters and spaces.');
      return;
    }

    if (!formData.fullName || !formData.email || !formData.issueDescription) {
      setError('All fields are required.');
      return;
    }

    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    setSuccessMessage('Issue saved! We will get back to you shortly.');
    // Clear form
    setFormData({
      fullName: '',
      email: '',
      issueDescription: '',
    });
  };

  const isFormValid = formData.fullName && formData.email && formData.issueDescription;

  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#CB976F', minHeight: '100vh' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#FFF1E0', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <div style={{ margin: '20px 0' }}>
          <label htmlFor="fullName" style={{ display: 'block', marginBottom: '5px' }}>Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ margin: '20px 0' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ margin: '20px 0' }}>
          <label htmlFor="issueDescription" style={{ display: 'block', marginBottom: '5px' }}>Issue Description</label>
          <textarea
            id="issueDescription"
            name="issueDescription"
            placeholder="Describe your issue"
            value={formData.issueDescription}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', backgroundColor: '#FFFFFF' }}
            rows="6"
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button
          type="submit"
          style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: isFormValid ? '#B4C99D' : '#d3d3d3', border: 'none', borderRadius: '5px', cursor: isFormValid ? 'pointer' : 'not-allowed' }}
          disabled={!isFormValid}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
