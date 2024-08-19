import React from "react";
import { useNavigate } from "react-router-dom";
import "./Movies.css"; // Create this CSS file for styling
import Navbar from "./Navbar";
import Footer from "./Footer";

// Importing images
import pvr from "../assets/pvr.jpg";
import cinepolis from "../assets/cinepolis.jpg";
import inox from "../assets/inox.jpg";
import carnival from "../assets/carnival.jpg";
import big from "../assets/big.jpg";
import imax from "../assets/imax.jpg";
import rajmandir from "../assets/rajmandir.jpg";
import eros from "../assets/eros.jpg";
import metro from "../assets/metro.jpg";
import delite from "../assets/delite.jpg";
import aurora from "../assets/aurora.jpg";
import gaiety from "../assets/gaiety.jpg";
import platinum from "../assets/platinum.jpg";
import miraj from "../assets/miraj.jpg";
import carnivalbig from "../assets/carnivalbig.jpg";
import fame from "../assets/fame.jpg";
import pvricon from "../assets/pvricon.jpg";
import inoxgalaxy from "../assets/inoxgalaxy.jpg";
import cinepolisfun from "../assets/cinepolisfun.jpg";
import mumbaicinema from "../assets/mumbai.jpg";

import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.jpg";
import movie4 from "../assets/movie4.jpg";
import movie5 from "../assets/movie5.jpg";

const Movies = () => {
  const navigate = useNavigate();

  const movieHalls = [
    { id: 1, name: "PVR Cinemas", image: pvr },
    { id: 2, name: "Cinepolis", image: cinepolis },
    { id: 3, name: "Inox", image: inox },
    { id: 4, name: "Carnival Cinemas", image: carnival },
    { id: 5, name: "Big Cinemas", image: big },
    { id: 6, name: "IMAX Wadala", image: imax },
    { id: 7, name: "Raj Mandir", image: rajmandir },
    { id: 8, name: "Eros Cinema", image: eros },
    { id: 9, name: "Metro Cinema", image: metro },
    { id: 10, name: "Delite Cinema", image: delite },
    { id: 11, name: "Aurora Cinema", image: aurora },
    { id: 12, name: "Gaiety Galaxy", image: gaiety },
    { id: 13, name: "Platinum Cinemas", image: platinum },
    { id: 14, name: "Miraj Cinemas", image: miraj },
    { id: 15, name: "Carnival Big Cinemas", image: carnivalbig },
    { id: 16, name: "Fame Cinemas", image: fame },
    { id: 17, name: "PVR Icon", image: pvricon },
    { id: 18, name: "Inox Galaxy", image: inoxgalaxy },
    { id: 19, name: "Cinepolis Fun Cinemas", image: cinepolisfun },
    { id: 20, name: "Mumbai Cinema", image: mumbaicinema },
  ];

  const movies = [
    {
      id: 1,
      title: "Stree 2",
      image: movie1,
      description: "A thrilling movie",
    },
    {
      id: 2,
      title: "Deadpool & Wolverine",
      image: movie2,
      description: "A Cinematic drama",
    },
    {
      id: 3,
      title: "karven",
      image: movie3,
      description: "An action-packed adventure",
    },
    {
      id: 4,
      title: "kanguva",
      image: movie4,
      description: "A science fiction epic",
    },
    {
      id: 5,
      title: "Pushpa 2",
      image: movie5,
      description: "A captivating drama",
    },
  ];

  const handleBookTicket = () => {
    navigate("/payment");
  };

  return (
    <div>
      <Navbar />
      <div className="movies-container">
        <div className="section">
          <h2>Popular Movie Halls</h2>
          <div className="halls-container">
            {movieHalls.map((hall) => (
              <div className="hall-card" key={hall.id}>
                <img src={hall.image} alt={hall.name} className="hall-image" />
                <h3 className="hall-name">{hall.name}</h3>
                <button className="book-button" onClick={handleBookTicket}>
                  Book Ticket
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Featured Movies</h2>
          <div className="movies-container">
            {movies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="movie-image"
                />
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-description">{movie.description}</p>
                <button className="book-button" onClick={handleBookTicket}>
                  Book Ticket
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
