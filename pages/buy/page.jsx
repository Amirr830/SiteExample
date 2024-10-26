"use client"


import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle payment processing here
    alert('Payment information submitted!');
  };

  return (
    <div className="payment-container" style={{direction:"rtl"}}>
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="cardName">Name on Card</label>
          <input
            type="text"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            maxLength="19" // Format for card numbers (with spaces)
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
            maxLength="5" // Format MM/YY
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
            maxLength="4" // CVV is usually 3 or 4 digits
          />
        </div>
        <button type="submit" className="submit-button">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentForm;
