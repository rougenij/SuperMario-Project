import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="main-page">
      <header className="main-header">
        <div className="main-home">
          <Link to="/">HomePage</Link>
        </div>
        <div className="main-adminpanel">
          <Link to="/admin">Admin Panel</Link>
        </div>
      </header>
      <main className="main-homepage">
        <Link to={"/game"}>
          <button className="homepage-btn-playgame">Play Game</button>
        </Link>
      </main>
    </div>
  );
}

export default HomePage;
