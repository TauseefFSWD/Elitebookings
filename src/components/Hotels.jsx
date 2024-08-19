import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Hotels.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import hotel1 from "../assets/h1.jpg";
import hotel2 from "../assets/h2.jpg";
import hotel3 from "../assets/h3.jpg";
import hotel4 from "../assets/h4.jpg";
import hotel5 from "../assets/h5.jpg";
import hotel6 from "../assets/hotel6.jpg";
import hotel7 from "../assets/hotel7.jpg";
import hotel8 from "../assets/hotel8.jpg";
import hotel9 from "../assets/hotel9.jpg";
import hotel10 from "../assets/hotel10.jpg";
import hotel11 from "../assets/hotel11.jpg";
import hotel12 from "../assets/hotel12.jpg";
import hotel13 from "../assets/hotel13.jpg";
import hotel14 from "../assets/hotel14.jpg";
import hotel15 from "../assets/hotel15.jpg";
import hotel16 from "../assets/hotel16.jpg";
import hotel17 from "../assets/hotel17.jpg";
import hotel18 from "../assets/hotel18.jpg";
import hotel19 from "../assets/hotel19.jpg";
import hotel20 from "../assets/hotel20.jpg";

const hotels = [
  {
    image: hotel1,
    name: "Taj Mahal Palace",
    description:
      "A luxury hotel located near the iconic Taj Mahal. Offers world-class amenities and stunning views.",
    price: "₹15,000",
  },
  {
    image: hotel2,
    name: "The Oberoi",
    description:
      "Elegantly designed with luxurious rooms and exceptional service. Perfect for a comfortable stay.",
    price: "₹12,000",
  },
  {
    image: hotel3,
    name: "Leela Palace",
    description:
      "A regal hotel with exquisite interiors and top-notch facilities. Enjoy a royal experience.",
    price: "₹18,000",
  },
  {
    image: hotel4,
    name: "ITC Maurya",
    description:
      "An elegant hotel offering sophisticated decor and a range of gourmet dining options.",
    price: "₹14,000",
  },
  {
    image: hotel5,
    name: "Hyatt Regency",
    description:
      "Modern accommodations with state-of-the-art amenities and a prime location in the city.",
    price: "₹10,000",
  },
  {
    image: hotel6,
    name: "JW Marriott",
    description:
      "Luxury at its finest, with spacious rooms and an array of facilities for relaxation and business.",
    price: "₹16,000",
  },
  {
    image: hotel7,
    name: "Radisson Blu",
    description:
      "Contemporary hotel offering comfort and convenience with excellent service and amenities.",
    price: "₹9,000",
  },
  {
    image: hotel8,
    name: "Sheraton Grand",
    description:
      "A stylish hotel featuring modern rooms and premium services for a memorable stay.",
    price: "₹13,000",
  },
  {
    image: hotel9,
    name: "Park Hyatt",
    description:
      "Sophisticated accommodations with an emphasis on personalized service and elegance.",
    price: "₹17,000",
  },
  {
    image: hotel10,
    name: "InterContinental",
    description:
      "Internationally recognized for luxury and comfort, offering superb dining and relaxation options.",
    price: "₹11,000",
  },
  {
    image: hotel11,
    name: "The Westin",
    description:
      "A contemporary hotel with a focus on wellness and premium guest services.",
    price: "₹14,500",
  },
  {
    image: hotel12,
    name: "Four Seasons",
    description:
      "Experience unparalleled luxury with exquisite dining and a serene atmosphere.",
    price: "₹19,000",
  },
  {
    image: hotel13,
    name: "Marriott Hotel",
    description:
      "A global brand known for its comfort, high service standards, and excellent amenities.",
    price: "₹12,500",
  },
  {
    image: hotel14,
    name: "Grand Hyatt",
    description:
      "An iconic hotel with high-end facilities, perfect for business or leisure travelers.",
    price: "₹20,000",
  },
  {
    image: hotel15,
    name: "Hilton Garden Inn",
    description:
      "Modern and comfortable accommodations with a focus on guest satisfaction and convenience.",
    price: "₹8,000",
  },
  {
    image: hotel16,
    name: "Conrad",
    description:
      "Offers contemporary luxury with superb facilities and exceptional service.",
    price: "₹15,500",
  },
  {
    image: hotel17,
    name: "The Leela",
    description:
      "Known for its refined elegance and premium services, providing a luxurious experience.",
    price: "₹18,500",
  },
  {
    image: hotel18,
    name: "Crowne Plaza",
    description:
      "Stylish hotel with comprehensive amenities, ideal for both business and leisure stays.",
    price: "₹11,500",
  },
  {
    image: hotel19,
    name: "Hotel Ritz-Carlton",
    description:
      "Exquisite hotel featuring top-tier facilities and an opulent ambiance.",
    price: "₹22,000",
  },
  {
    image: hotel20,
    name: "Hotel Novotel",
    description:
      "Modern and affordable with high-quality service and convenient locations.",
    price: "₹9,500",
  },
];
const Hotels = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBookNow = () => {
    navigate("/payment"); // Navigate to /payment when button is clicked
  };

  return (
    <div>
      <Navbar />
      <div className="hotels-container">
        {hotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <h3 className="hotel-name">{hotel.name}</h3>
            <p className="hotel-description">{hotel.description}</p>
            <p className="hotel-price">Price: {hotel.price} per night</p>
            <button className="book-button" onClick={handleBookNow}>
              Book Hotel
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Hotels;
