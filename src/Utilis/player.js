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
    temp[position] = temp[position - 1];
    temp[position - 1] = "mario";
  } else if (e.keyCode === 38) {
    if (temp[position - 20] === "block" || temp[position - 20] === "lucky") {
      temp[position] = "mario";
    } else {
      temp[position] = temp[position - 40];
      temp[position - 40] = "mario";
    }
  }
  return temp;
};

export default playerMove;

// If (temp[postion - 39] === 'block') => then mario can jump and move right
// if (temp[position- 20] ) === 'block') => Block above mario, he cant jump above it
// if (temp[position- 20] === 'lucky') ==> Lucky block above mario, he can get a special gift
