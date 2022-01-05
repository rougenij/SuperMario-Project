import React, { useState, useEffect, useRef } from "react";
import { matrixEndWorld } from "../../../Utilis/matrixWorld";
import playerMove from "../../../Utilis/player";
import { useHistory } from "react-router-dom";
import "./endingworld.css";

function EndingWorld(props) {
  const [matrix, setMatrix] = useState(matrixEndWorld);
  const [world, setWorld] = useState([]);
  const [falling, setFalling] = useState(false);
  const { score } = props;
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
            el = "flag1";
            break;
          case 22:
            el = "flag2";
            break;
          case 24:
            el = "flag4";
            break;
          case 26:
            el = "flag6";
            break;
          case 27:
            el = "flag7";
            break;
          case 28:
            el = "flag8";
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
          let temp = [...world];
          let position = getMarioPosition(temp);
          if (temp[position + 1] === "castle17" && e.keyCode === 39) {
            history.push("/winner");
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
      <div>{score}</div>
    </div>
  );
}

export default EndingWorld;
