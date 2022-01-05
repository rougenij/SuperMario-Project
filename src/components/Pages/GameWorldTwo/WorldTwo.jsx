import React, { useState, useEffect, useRef, useCallback } from "react";
import { matrixWorldTwo } from "../../../Utilis/matrixWorld";
import playerMove from "../../../Utilis/player";
import { useHistory } from "react-router-dom";
import "./worldtwo.css";

function WorldTwo(props) {
  const [matrix, setMatrix] = useState(matrixWorldTwo);
  const [world, setWorld] = useState([]);
  const [falling, setFalling] = useState(false);
  const { score, setScore } = props;
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
          case 0:
            el = "mario";
            break;
          case 3:
            el = "block";
            break;
          case 4:
            el = "coin";
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
  const updateMap = useCallback(
    (newWorld) => {
      let el = "";
      let temp = [];
      let prevCount = 0;
      let newCount = 0;
      let prevWorld = [...world];
      for (let i = 0; i < newWorld.length; i++) {
        el = newWorld[i];
        temp.push(el);
      }
      for (let i = 0; i < prevWorld.length; i++) {
        if (prevWorld[i] === "coin") {
          prevCount++;
        }
        if (temp[i] === "coin") {
          newCount++;
        }
      }
      if (prevCount !== newCount) setScore((prevScore) => prevScore + 100);
      setWorld(temp);
    },
    [world, setScore]
  );

  useEffect(() => {
    drawMap(matrix);
    divEl.current.focus();
  }, [matrix]);

  useEffect(() => {
    let temp = [...world];
    let position = getMarioPosition(temp);
    if (temp[position + 20] === "sky" || temp[position + 20] === "coin")
      setFalling(true);
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
        if (world[position + 20] === "sky" || world[position + 20] === "coin") {
          setWorld(temp);
          updateMap(temp);
        }
        setFalling(!falling);
      }, 350);
    }
    return () => {
      clearTimeout(timeOutID);
    };
  }, [falling, world, updateMap]);
  const displayMap = () => {
    console.log(score);
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
          if (
            (temp[position + 20] === "pipe3-1" && e.keyCode === 40) ||
            (temp[position + 20] === "pipe3-2" && e.keyCode === 40)
          ) {
            history.push("/end");
          }
          if (e.keyCode === 38 && !falling) {
            setFalling(true);
          }
          updateMap(playerMove(e, world, falling));
        }}
        ref={divEl}
      >
        <div className="counter">{score}</div>
        {displayMap()}
      </div>
    </div>
  );
}

export default WorldTwo;
