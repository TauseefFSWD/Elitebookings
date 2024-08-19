import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Importing images
import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel4.jpg";
import hotel5 from "../assets/hotel5.jpg";

import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.jpg";
import movie4 from "../assets/movie4.jpg";
import movie5 from "../assets/movie5.jpg";

import flight1 from "../assets/flight1.jpg";
import flight2 from "../assets/flight2.jpg";
import flight3 from "../assets/flight3.jpg";
import flight4 from "../assets/flight4.jpg";
import flight5 from "../assets/flight5.jpg";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }

      try {
        const response = await axios.get(
          "https://backbook-la3i.onrender.com/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUsername(response.data.username);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        navigate("/");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleBookTicket = () => {
    navigate("/payment");
  };

  const handleExploreMore = (section) => {
    navigate(`/${section}`);
  };

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h1>Welcome, {username}</h1>

        <div className="section-container">
          <h2>Hotel Booking</h2>
          <div className="card-container">
            {[hotel1, hotel2, hotel3, hotel4, hotel5].map((image, index) => (
              <div className="card" key={index}>
                <img
                  src={image}
                  alt={`Hotel ${index + 1}`}
                  className="card-image"
                />
                <div className="card-content">
                  <p>Stay at luxurious hotels and enjoy the best amenities.</p>
                  <button className="book-button" onClick={handleBookTicket}>
                    Book Hotel
                  </button>
                </div>
              </div>
            ))}
            <button
              className="explore-more-button"
              onClick={() => handleExploreMore("hotels")}
            >
              Explore More Hotels
            </button>
          </div>

          <h2>Movie Ticket Booking</h2>
          <div className="card-container">
            {[movie1, movie2, movie3, movie4, movie5].map((image, index) => (
              <div className="card" key={index}>
                <img
                  src={image}
                  alt={`Movie ${index + 1}`}
                  className="card-image"
                />
                <div className="card-content">
                  <p>Watch the latest blockbusters in the best theaters.</p>
                  <button className="book-button" onClick={handleBookTicket}>
                    Book Movie
                  </button>
                </div>
              </div>
            ))}
            <button
              className="explore-more-button"
              onClick={() => handleExploreMore("movies")}
            >
              Explore More Movies
            </button>
          </div>

          <h2>Flight Ticket Booking</h2>
          <div className="card-container">
            {[flight1, flight2, flight3, flight4, flight5].map(
              (image, index) => (
                <div className="card" key={index}>
                  <img
                    src={image}
                    alt={`Flight ${index + 1}`}
                    className="card-image"
                  />
                  <div className="card-content">
                    <p>Fly to your dream destinations with comfort and ease.</p>
                    <button className="book-button" onClick={handleBookTicket}>
                      Book Flight
                    </button>
                  </div>
                </div>
              )
            )}
            <button
              className="explore-more-button"
              onClick={() => handleExploreMore("flights")}
            >
              Explore More Flights
            </button>
          </div>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
