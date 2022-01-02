const playerMove = (e, matrix) => {
  let temp = [...matrix];
  let position = 0;
  // const random = ["mushroom", "coin", "star"];
  // let randomSurprise = Math.floor(Math.random() * 3);
  // console.log(random[randomSurprise]);
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "mario") {
      position = i;
    }
  }

  if (e.keyCode === 39) {
    if (temp[position + 1] === "pipe3-3") {
      temp[position] = "mario";
    } else {
      temp[position] = temp[position + 1];
      temp[position + 1] = "mario";
    }
  } else if (e.keyCode === 37) {
    if (position % 20 === 0) {
      temp[position] = "mario";
      temp[position - 1] = "sky";
    } else {
      temp[position] = temp[position - 1];
      temp[position - 1] = "mario";
    }
  } else if (e.keyCode === 38) {
    if (temp[position - 20] === "block" || temp[position - 20] === "lucky") {
      temp[position] = "mario";
    } else {
      temp[position] = temp[position - 40];
      temp[position - 40] = "mario";
      setTimeout(() => {
        temp[position] = temp[position + 20];
        temp[position + 20] = "mario";
        setTimeout(() => {
          temp[position] = temp[position + 20];
          temp[position + 20] = "mario";
        }, 500);
      }, 500);
    }
  }
  return temp;
};

export default playerMove;





const playerMove = (e, matrix) => {
    let temp = [...matrix];
    let position = 0;
    // const random = ["mushroom", "coin", "star"];
    // let randomSurprise = Math.floor(Math.random() * 3);
    // console.log(random[randomSurprise]);
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === "mario") {
        position = i;
      }
    }
    if (e.keyCode === 39) {
      // going right
      return marioRight(temp, position);
    }
    if (e.keyCode === 37) {
      //going left
      return marioLeft(temp, position);
    }
    if (e.keyCode === 38) {
      // Jumping
      return marioJump(temp, position);
    }
  };
  
  export default playerMove;
  
  const marioRight = (temp, position) => {
    if (
      temp[position + 1] === "pipe3-3" ||
      temp[position + 1] === "block" ||
      temp[position + 1] === "pipe3-1" ||
      temp[position + 1] === "goomba"
    ) {
      temp[position] = "mario";
    } else {
      temp[position] = temp[position + 1];
      temp[position + 1] = "mario";
    }
    return temp;
  };
  
  const marioLeft = (temp, position) => {
    if (position % 20 === 0) {
      temp[position] = "mario";
      temp[position - 1] = "sky";
    } else {
      temp[position] = temp[position - 1];
      temp[position - 1] = "mario";
    }
    return temp;
  };
  
  const marioJump = (temp, position) => {
    if (temp[position - 20] === "block" || temp[position - 20] === "lucky") {
      temp[position] = "mario";
    } else {
      temp[position] = temp[position - 40];
      temp[position - 40] = "mario";
      setTimeout(() => {
        temp[position] = temp[position + 20];
        temp[position + 20] = "mario";
        setTimeout(() => {
          temp[position] = temp[position + 20];
          temp[position + 20] = "mario";
          return temp;
        }, 500);
      }, 500);
    }
  };
  
  // if (e.keyCode === 39) {
  //   if (
  //     temp[position + 1] === "pipe3-3" ||
  //     temp[position + 1] === "block" ||
  //     temp[position + 1] === "pipe3-1" ||
  //     temp[position + 1] === "goomba"
  //   ) {
  //     temp[position] = "mario";
  //   } else {
  //     temp[position] = temp[position + 1];
  //     temp[position + 1] = "mario";
  //   }
  // } else if (e.keyCode === 37) {
  //   if (position % 20 === 0) {
  //     temp[position] = "mario";
  //     temp[position - 1] = "sky";
  //   } else {
  //     temp[position] = temp[position - 1];
  //     temp[position - 1] = "mario";
  //   }
  // } else if (e.keyCode === 38) {
  //   if (temp[position - 20] === "block" || temp[position - 20] === "lucky") {
  //     temp[position] = "mario";
  //   } else {
  //     temp[position] = temp[position - 40];
  //     temp[position - 40] = "mario";
  //     setTimeout(() => {
  //       temp[position] = temp[position + 20];
  //       temp[position + 20] = "mario";
  //       setMarioState(temp);
  //       setTimeout(() => {
  //         temp[position] = temp[position + 20];
  //         temp[position + 20] = "mario";
  //         return updateMarioState(temp);
  //       }, 500);
  //     }, 500);
  //   }
  // }
  