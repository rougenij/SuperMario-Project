import React, { useState, useEffect, useRef, useCallback } from "react";
import startingMatrix from "../../../Utilis/matrixWorld";
import playerMove from "../../../Utilis/player";

import "./worldone.css";

function WorldOne() {
  const [world, setWorld] = useState([]);
  const [matrix, setMatrix] = useState(startingMatrix);
  const [falling, setFalling] = useState(false);
  const [score, setScore] = useState(0);
  // const [goomba, setGoomba] = useState("");
  // const [fakeGoomba, setFakeGoomba] = useState("");
  const divEl = useRef("");
  // const goombaEl = useRef("");
  // const fakegoombaEl = useRef("");
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
          case 7:
            el = "coin";
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
    [world]
  );

  useEffect(() => {
    drawMap(matrix);
    divEl.current.focus();
  }, [matrix]);
  // useEffect(() => {
  // fakeGoomba.append(goomba);
  //   console.log(fakeGoomba);
  //   console.log(goomba);
  // }, [fakeGoomba]);
  // const handleRect = useCallback((node) => {
  //   setGoomba(node);
  // }, []);
  // const handleRectFakeGoomba = useCallback((node) => {
  //   setFakeGoomba(node);
  // }, []);
  // ?.getBoundingClientRect()

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
    return world.map((tile, i) => {
      // if (tile === "goomba") {
      //   return (
      //     <div key={i} className={tile} ref={handleRect}>
      //       {i}
      //     </div>
      //   );
      // } else if (tile === "fakegoomba") {
      //   return (
      //     <div key={i} className={tile} ref={handleRectFakeGoomba}>
      //       {i}
      //     </div>
      //   );
      // }
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
        ref={divEl}
      >
        <div className="counter">{score}</div>
        {displayMap()}
      </div>
    </div>
  );
}

export default WorldOne;
