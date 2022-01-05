import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "react-google-login";

function HomePage() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.clear();
  }, []);
  const clientId =
    "459346676517-ob3q9am6o5dsm2mioh7v04bs18eodqhh.apps.googleusercontent.com";
  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogin = async (googleData) => {
    const res = await axios.post(
      "https://61cc89a1198df60017aec12d.mockapi.io/users",
      {
        username: googleData.profileObj.name,
        score: 0,
        profileimg: googleData.profileObj.imageUrl,
      }
    );
    setLoginData(res);
    setIsLoggedIn(true);
    localStorage.setItem("loginData", JSON.stringify(res));
  };
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };
  return (
    <div className="main-page">
      <header className="main-header">
        <div className="main-home">
          {isLoggedIn ? (
            <div>
              You logged in as {loginData.data.username}
              <button onClick={handleLogout}>Log Out</button>
            </div>
          ) : (
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign In"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={"single_host_origin"}
            />
          )}
        </div>
        {isLoggedIn ? (
          <div className="main-adminpanel">
            <Link to="/admin">Admin Panel</Link>
          </div>
        ) : (
          <div></div>
        )}
      </header>
      <main className="main-homepage">
        {isLoggedIn ? (
          <div>
            <Link to={"/game"}>
              <button className="homepage-btn-playgame">Play Game</button>
            </Link>
            <button className="homepage-btn-howtoplay">How to Play</button>
          </div>
        ) : (
          <div>
            <h1>Login to play</h1>
          </div>
        )}
      </main>
    </div>
  );
}

export default HomePage;
