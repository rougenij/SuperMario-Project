import React from "react";
import "./HomePage.css";
// import { Link } from "react-router-dom";
// import WorldOne from "../GameWorldOne/WorldOne";

function HomePage() {
  return (
    <div className="main-page">
      <header className="main-header">
        <div className="main-home" onClick={() => console.log("hi")}>
          HomePage
        </div>
        <div className="main-adminpanel">Admin Panel</div>
      </header>
      <main className="main-homepage">
        {/* <Link to={WorldOne}>
          <button>Play Game</button>
        </Link> */}
      </main>
    </div>
  );
}

export default HomePage;
