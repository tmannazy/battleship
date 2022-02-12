const Gameboard = () => {
  const boardArray = Array(10)
    .fill()
    .map((arr) => Array(10).fill("~"));

  const receiveAttack = () => {};
  return { boardArray, receiveAttack };
};

export default Gameboard;
