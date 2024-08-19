import React from "react";
import "./About.css"; // Assuming you have a CSS file for styling
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <h1>About EliteBookings</h1>
        <p>
          Welcome to EliteBookings, your one-stop destination for all your
          travel, entertainment, and leisure needs. Whether you’re planning a
          luxurious getaway, booking a movie night, or reserving a flight to
          your dream destination, EliteBookings is here to make the process
          easy, efficient, and enjoyable.
        </p>

        <h2>What We Do</h2>
        <p>
          At EliteBookings, we specialize in providing an all-in-one platform
          for booking hotels, movie theaters, and flights. Our user-friendly
          interface allows you to explore top hotels, discover the latest
          movies, and find flights at the best prices. With a commitment to
          customer satisfaction, we ensure that your booking experience is
          smooth and hassle-free.
        </p>

        <h2>Our Services</h2>

        <div className="service-section">
          <h3>Hotels</h3>
          <p>
            Explore and book from a wide range of luxurious hotels across India.
            Whether you're looking for a beachside resort or a peaceful retreat
            in the mountains, EliteBookings has it all. We ensure that you get
            the best deals and the most comfortable stays.
          </p>
          <h4>Customer Reviews</h4>
          <blockquote>
            "EliteBookings made my vacation planning so easy! The hotel options
            were top-notch and the booking process was seamless." – Rohan Sharma
          </blockquote>
          <blockquote>
            "I found the perfect resort for my family vacation through
            EliteBookings. The service was outstanding, and the prices were
            unbeatable!" – Sneha Verma
          </blockquote>
        </div>

        <div className="service-section">
          <h3>Movie Theaters</h3>
          <p>
            Book your seats at the best movie theaters with ease. EliteBookings
            offers a wide selection of theaters with the latest movies, ensuring
            that your movie night is nothing short of perfect.
          </p>
          <h4>Customer Reviews</h4>
          <blockquote>
            "Booking movie tickets through EliteBookings is so convenient. The
            interface is user-friendly and I always find the best seats!" –
            Priya Mehta
          </blockquote>
          <blockquote>
            "EliteBookings is my go-to for movie night. I love how easy it is to
            book tickets and the variety of theaters available." – Rahul Gupta
          </blockquote>
        </div>

        <div className="service-section">
          <h3>Flights</h3>
          <p>
            Find and book flights to destinations worldwide with EliteBookings.
            We offer competitive pricing and a variety of airlines to choose
            from, making sure that your travel plans are perfectly suited to
            your needs.
          </p>
          <h4>Customer Reviews</h4>
          <blockquote>
            "EliteBookings helped me find the best flight deals for my business
            trip. I highly recommend their service!" – Arjun Patel
          </blockquote>
          <blockquote>
            "I booked my entire international trip through EliteBookings, and it
            was a breeze. The prices were great, and the customer service was
            exceptional." – Neha Singh
          </blockquote>
        </div>

        <h2>About the Developer</h2>
        <div className="developer-section">
          <p>
            EliteBookings was developed by{" "}
            <strong>TAUSEEF AKBAR ALI SHAIKH</strong>, a passionate web
            developer with expertise in creating user-efficient, visually
            appealing, and responsive websites. Tauseef is dedicated to
            delivering top-quality web experiences and is always exploring new
            ways to innovate and improve user interfaces.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
