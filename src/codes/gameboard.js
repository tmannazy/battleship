const Gameboard = () => {
  const boardArray = Array(10)
    .fill()
    .map((arr) => Array(10).fill("~"));

  return { boardArray };
};

export default Gameboard;
