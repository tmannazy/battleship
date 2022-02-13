const Gameboard = () => {
  const boardArray = Array(10)
    .fill()
    .map((arr) => Array(10).fill("~"));

  const receiveAttack = () => {};

  const coordinates = () => {};
  return { boardArray, receiveAttack, coordinates };
};

export default Gameboard;
