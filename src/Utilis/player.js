const playerMove = (e, matrix) => {
  let temp = [...matrix];
  let position = 0;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "mario") {
      position = i;
    }
  }

  if (e.keyCode === 39) {
    temp[position] = temp[position + 1];
    temp[position + 1] = "mario";
  } else if (e.keyCode === 37) {
    temp[position] = temp[position - 1];
    temp[position - 1] = "mario";
  } else if (e.keyCode === 38) {
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

  return temp;
};

export default playerMove;
