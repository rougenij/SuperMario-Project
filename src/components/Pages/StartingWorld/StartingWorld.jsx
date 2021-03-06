import React, { useState, useEffect, useRef } from "react";
import { startingWorld } from "../../../Utilis/matrixWorld";
import playerMove from "../../../Utilis/player";
import { useHistory } from "react-router-dom";
import "./startingworld.css";

function StartingWorld() {
  const [matrix, setMatrix] = useState(startingWorld);
  const [world, setWorld] = useState([]);
  const [falling, setFalling] = useState(false);
  const history = useHistory();
  const divEl = useRef("");

  const getMarioPosition = (temp) => {
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === "mario") {
        return i;
      }
    }
  };
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
          case 11:
            el = "castle11";
            break;
          case 12:
            el = "castle12";
            break;
          case 13:
            el = "castle13";
            break;
          case 14:
            el = "castle14";
            break;
          case 15:
            el = "castle15";
            break;
          case 16:
            el = "castle16";
            break;
          case 17:
            el = "castle17";
            break;
          case 18:
            el = "castle18";
            break;
          case 19:
            el = "castle19";
            break;
          case 21:
            el = "pipe1";
            break;
          case 22:
            el = "pipe2";
            break;
          case 23:
            el = "pipe3";
            break;
          case 24:
            el = "pipe4";
            break;
          case 25:
            el = "pipe5";
            break;
          case 26:
            el = "pipe6";
            break;
          case 27:
            el = "pipe7";
            break;
          case 28:
            el = "pipe8";
            break;
          case 29:
            el = "pipe9";
            break;
          case 0:
            el = "mario";
            break;
          case 3:
            el = "block";
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
    divEl.current.focus();
  }, [matrix]);

  useEffect(() => {
    let temp = [...world];
    let position = 0;

    position = getMarioPosition(temp);
    if (temp[position + 20] === "sky") setFalling(true);
  }, [world]);
  useEffect(() => {
    let temp = [...world];
    let position = 0;
    let timeOutID;
    console.log("falling", falling);
    if (falling) {
      timeOutID = setTimeout(() => {
        position = getMarioPosition(temp);
        temp[position + 20] = "mario";
        temp[position] = "sky";
        if (world[position + 20] === "sky") setWorld(temp);
        setFalling(!falling);
      }, 500);
    }
    return () => {
      clearTimeout(timeOutID);
    };
  }, [falling, world]);
  const displayMap = () => {
    return world.map((tile, i) => {
      return <div key={i} className={tile}></div>;
    });
  };

  return (
    <div className="App">
      <div
        className="matrix-grid"
        tabIndex={0}
        onKeyDown={(e) => {
          let temp = [...world];
          let position = getMarioPosition(temp);
          if (temp[position + 1] === "pipe7" && e.keyCode === 39) {
            history.push("/worldone");
          }
          if (e.keyCode === 38 && !falling) {
            setFalling(true);
          }
          updateMap(playerMove(e, world, falling));
        }}
        ref={divEl}
      >
        {displayMap()}
      </div>
    </div>
  );
}

export default StartingWorld;
