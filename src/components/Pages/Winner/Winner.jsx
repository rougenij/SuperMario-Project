// import React, { useState, useEffect, useCallback } from "react";
// import mockApi from "../../API/mockApi";
// import { useHistory } from "react-router-dom";
import "./winner.css";

function Winner(props) {
  const { score } = props;
  //   const [data, setData] = useState([]);
  //   let user = JSON.parse(localStorage.getItem("loginData"));
  //   let email = user.data.email;

  return (
    <div>
      <div className="winner-container">
        <p className="winner-message">
          congratulations!!!! WOOOOOOOO! YOU FINISHED THE GAME!!! Lets goooo!!
        </p>
        <p className="winner-score">You had {score} total points!</p>
      </div>
    </div>
  );
}

export default Winner;
