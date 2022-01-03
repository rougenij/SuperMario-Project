import React, { useState, useEffect } from "react";
import startingMatrix from "../../../Utilis/matrixWorld";
import playerMove from "../../../Utilis/player";
import "./worldone.css";

function WorldOne() {
  const [world, setWorld] = useState([]);
  const [matrix, setMatrix] = useState(startingMatrix);
  const [falling, setFalling] = useState(false);
  const [skip, setSkip] = useState(false);

  const drawMap = (matrix) => {
    if (false) {
      setMatrix(matrix);
    }
    let el = "";
    let temp = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        switch (matrix[i][j]) {
          case 2:
            el = "ground";
            break;
          case 4:
            el = "block";
            break;
          case 5:
            el = "lucky";
            break;
          case 0:
            el = "mario";
            break;
          case 6:
            el = "goomba";
            break;
          case 31:
            el = "pipe3-1";
            break;
          case 32:
            el = "pipe3-2";
            break;
          case 33:
            el = "pipe3-3";
            break;
          case 34:
            el = "pipe3-4";
            break;
          default:
            el = "sky";
            break;
        }
        temp.push(el);
        setWorld(temp);
      }
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
  };

  useEffect(() => {
    drawMap(matrix);
  }, [matrix]);

  useEffect(() => {
    console.log("hey");
    if (falling) {
      let temp = [...world];
      let position = 0;

      for (let i = 0; i < temp.length; i++) {
        if (temp[i] === "mario") {
          position = i;
        }
      }
      if (temp[position - 20] !== "sky") setFalling(false);
      setTimeout(() => {
        if (
          temp[position + 20] === "block" ||
          temp[position + 20] === "lucky" ||
          temp[position + 20] === "pipe3-1" ||
          temp[position + 20] === "pipe3-2" ||
          temp[position + 20] === "ground"
        ) {
          setSkip(true);
          setFalling(true);
        }
        console.log("before !skip", skip);
        if (skip) {
          console.log("pos", position);
          temp[position + 20] = temp[position];
          temp[position] = "mario";
        } else {
          setTimeout(() => {
            temp[position + 20] = "mario";
            temp[position] = "sky";
            setWorld(temp);
            setFalling(false);
          }, 500);
        }
      }, 500);
    }
  }, [skip, falling, world]);

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
    <div className="App">
      <div
        className="matrix-grid"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.keyCode === 38 && !falling) {
            setFalling(true);
          }
          updateMap(playerMove(e, world, falling));
        }}
      >
        {displayMap()}
      </div>
    </div>
  );
}

export default WorldOne;
