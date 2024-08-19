import React, { useState } from "react";
import "./Payment.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Payment = () => {
  const [ticketType, setTicketType] = useState("movie");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleTicketTypeChange = (e) => setTicketType(e.target.value);
  const handleNumberChange = (e) => setNumberOfPeople(e.target.value);
  const handlePaymentMethodChange = (e) => setPaymentMethod(e.target.value);
  const handleCardNumberChange = (e) => setCardNumber(e.target.value);
  const handleCvvChange = (e) => setCvv(e.target.value);
  const handleExpiryDateChange = (e) => setExpiryDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking ${ticketType} for ${numberOfPeople} people with payment method ${paymentMethod}.`
    );
  };

  return (
    <div>
      <Navbar />
      <div className="payment-container">
        <div className="payment-form">
          <h2>Payment Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Select Booking Type</label>
              <div className="option-group">
                <label>
                  <input
                    type="radio"
                    value="movie"
                    checked={ticketType === "movie"}
                    onChange={handleTicketTypeChange}
                  />
                  Movie Ticket
                </label>
                <label>
                  <input
                    type="radio"
                    value="flight"
                    checked={ticketType === "flight"}
                    onChange={handleTicketTypeChange}
                  />
                  Flight Ticket
                </label>
                <label>
                  <input
                    type="radio"
                    value="hotel"
                    checked={ticketType === "hotel"}
                    onChange={handleTicketTypeChange}
                  />
                  Hotel Booking
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Number of People</label>
              <input
                type="number"
                min="1"
                value={numberOfPeople}
                onChange={handleNumberChange}
              />
            </div>

            <div className="form-group">
              <label>Payment Method</label>
              <div className="option-group">
                <label>
                  <input
                    type="radio"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={handlePaymentMethodChange}
                  />
                  Credit/Debit Card
                </label>
                <label>
                  <input
                    type="radio"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={handlePaymentMethodChange}
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>

            {paymentMethod === "card" && (
              <>
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    placeholder="Enter card number"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Expiration Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    placeholder="Enter CVV"
                    value={cvv}
                    onChange={handleCvvChange}
                    required
                  />
                </div>
              </>
            )}

            <button type="submit" className="book-button">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
