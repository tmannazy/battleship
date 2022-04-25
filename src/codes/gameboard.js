const Gameboard = () => {
  const boardArray = Array(10)
    .fill()
    .map((arr) => Array(10).fill("~"));

  const receiveAttack = () => {};

  const placeShip = (ship, receivedArrayIdx) => {
    const rows = boardArray.length;
    const columns = boardArray[0].length;
    // for (let i = 0; i < rows; i++) {
    //   for (let j = 0; j < columns; j++) {
    //     if (boardArray[i][j] === receivedArrayIdx) {
    //       return true;
    //     }
    //   }
    // }
    for (const i in boardArray) {
      for (const j in boardArray[i]) {
        if (boardArray[i][j] === receivedArrayIdx) {
          return true;
        }
      }
    }
    return null;
  };
  return { boardArray, receiveAttack, placeShip };
};

export default Gameboard;
