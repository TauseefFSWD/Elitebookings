import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Flights.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import flight1 from "../assets/f1.jpg";
import flight2 from "../assets/f2.jpg";
import flight3 from "../assets/f3.jpg";
import flight4 from "../assets/f4.jpg";
import flight5 from "../assets/f5.jpg";
import flight6 from "../assets/flight6.jpg";
import flight7 from "../assets/flight7.jpg";
import flight8 from "../assets/flight8.jpg";
import flight9 from "../assets/flight9.jpg";
import flight10 from "../assets/flight10.jpg";
import flight11 from "../assets/flight11.jpg";
import flight12 from "../assets/flight12.jpg";
import flight13 from "../assets/flight13.jpg";
import flight14 from "../assets/flight14.jpg";
import flight15 from "../assets/flight15.jpg";
import flight16 from "../assets/flight16.jpg";
import flight17 from "../assets/flight17.jpg";
import flight18 from "../assets/flight18.jpg";
import flight19 from "../assets/flight19.jpg";
import flight20 from "../assets/flight20.jpg";

const flights = [
  {
    image: flight1,
    airline: "Air India",
    route: "Mumbai to Dubai",
    description: "Direct flights with comfort.",
    price: "₹25,000",
  },
  {
    image: flight2,
    airline: "Emirates",
    route: "Mumbai to New York",
    description: "Luxurious flights across the Atlantic.",
    price: "₹80,000",
  },
  {
    image: flight3,
    airline: "Qatar Airways",
    route: "Delhi to London",
    description: "Premium service to the UK capital.",
    price: "₹70,000",
  },
  {
    image: flight4,
    airline: "Singapore Airlines",
    route: "Bangalore to Singapore",
    description: "Top-rated airline for a smooth journey.",
    price: "₹50,000",
  },
  {
    image: flight5,
    airline: "British Airways",
    route: "Mumbai to London",
    description: "Comfortable flights with excellent amenities.",
    price: "₹65,000",
  },
  {
    image: flight6,
    airline: "Cathay Pacific",
    route: "Delhi to Hong Kong",
    description: "Award-winning service to Asia.",
    price: "₹55,000",
  },
  {
    image: flight7,
    airline: "Air France",
    route: "Mumbai to Paris",
    description: "Fly to the city of lights in style.",
    price: "₹75,000",
  },
  {
    image: flight8,
    airline: "Lufthansa",
    route: "Bangalore to Frankfurt",
    description: "German efficiency and comfort.",
    price: "₹60,000",
  },
  {
    image: flight9,
    airline: "Jet Airways",
    route: "Delhi to Bangkok",
    description: "Explore Thailand with ease.",
    price: "₹30,000",
  },
  {
    image: flight10,
    airline: "Turkish Airlines",
    route: "Mumbai to Istanbul",
    description: "Experience Turkish hospitality on your journey.",
    price: "₹40,000",
  },
  {
    image: flight11,
    airline: "KLM Royal Dutch Airlines",
    route: "Delhi to Amsterdam",
    description: "Fly to the Netherlands with top-tier service.",
    price: "₹50,000",
  },
  {
    image: flight12,
    airline: "Delta Airlines",
    route: "Mumbai to Los Angeles",
    description: "Comfortable flights across the Pacific.",
    price: "₹85,000",
  },
  {
    image: flight13,
    airline: "American Airlines",
    route: "Delhi to New York",
    description: "Premium service to the US East Coast.",
    price: "₹80,000",
  },
  {
    image: flight14,
    airline: "Etihad Airways",
    route: "Mumbai to Abu Dhabi",
    description: "Luxurious flights close to home.",
    price: "₹20,000",
  },
  {
    image: flight15,
    airline: "South African Airways",
    route: "Delhi to Johannesburg",
    description: "Explore South Africa with ease.",
    price: "₹55,000",
  },
  {
    image: flight16,
    airline: "Asiana Airlines",
    route: "Bangalore to Seoul",
    description: "Fly to Korea with comfort and style.",
    price: "₹65,000",
  },
  {
    image: flight17,
    airline: "Malaysia Airlines",
    route: "Delhi to Kuala Lumpur",
    description: "Enjoy Malaysian hospitality on your flight.",
    price: "₹40,000",
  },
  {
    image: flight18,
    airline: "SriLankan Airlines",
    route: "Mumbai to Colombo",
    description: "Comfortable flights to Sri Lanka.",
    price: "₹25,000",
  },
  {
    image: flight19,
    airline: "All Nippon Airways (ANA)",
    route: "Delhi to Tokyo",
    description: "Fly to Japan with award-winning service.",
    price: "₹70,000",
  },
  {
    image: flight20,
    airline: "Japan Airlines",
    route: "Bangalore to Osaka",
    description: "Top-tier service to Japan’s second largest city.",
    price: "₹75,000",
  },
];

const Flights = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBookNow = (flight) => {
    navigate("/payment", { state: { flight } }); // Pass flight details to /payment
  };

  return (
    <div>
      <Navbar />
      <div className="flights-container">
        <h2>Choose Your Flight</h2>
        <div className="flight-list">
          {flights.map((flight, index) => (
            <div className="flight-card" key={index}>
              <img
                src={flight.image}
                alt={flight.airline}
                className="flight-image"
              />
              <h3 className="flight-airline">{flight.airline}</h3>
              <p className="flight-route">{flight.route}</p>
              <p className="flight-description">{flight.description}</p>
              <p className="flight-price">Price: {flight.price}</p>
              <button
                className="book-button"
                onClick={() => handleBookNow(flight)}
              >
                Book Flight
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Flights;
