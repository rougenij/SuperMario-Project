import React, { useState, useEffect } from "react";
import startingMatrix from "../../../Utilis/matrixWorld";
import playerMove from "../../../Utilis/player";
import "./worldone.css";

function WorldOne() {
  const [world, setWorld] = useState([]);
  const [matrix, setMatrix] = useState(startingMatrix);

  const drawMap = (matrix) => {
    if (false) {
      setMatrix(matrix);
    }
    let el = "";
    let temp = [];
    let temp2 = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
          el = "sky";
        } else if (matrix[i][j] === 2) {
          el = "ground";
        } else if (matrix[i][j] === 31) {
          el = "pipe3-1";
        } else if (matrix[i][j] === 4) {
          el = "block";
        } else if (matrix[i][j] === 5) {
          el = "lucky";
        } else if (matrix[i][j] === 0) {
          el = "mario";
        } else if (matrix[i][j] === 32) {
          el = "pipe3-2";
        } else if (matrix[i][j] === 33) {
          el = "pipe3-3";
        } else if (matrix[i][j] === 34) {
          el = "pipe3-4";
        }
        temp.push(el);
        setWorld(temp);
      }
      temp2.push(temp);
    }
  };
  const updateMap = (world) => {
    let el = "";
    let temp = [];
    for (let i = 0; i < world.length; i++) {
      el = world[i];
      temp.push(el);
    }
    setWorld(temp);
    console.log(temp);
  };
  useEffect(() => {
    drawMap(matrix);
  }, [matrix]);

  const displayMap = () => {
    return world.map((tile, i) => {
      return (
        <div key={i} className={tile}>
          {i}
        </div>
      );
    });
  };
  return (
    <div>
      <div
        className="matrix-grid"
        tabIndex={0}
        onKeyDown={(e) => {
          updateMap(playerMove(e, world));
        }}
      >
        {displayMap()}
      </div>
    </div>
  );
}

export default WorldOne;
