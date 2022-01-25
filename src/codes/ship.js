const Ship = (val) => {
  const hit = (num) => {
    if (num) return "hit";
  };

  const length = (num) => num;

  const isSunk = () => {
    const getLength = length();
    const positionsHit = hit();
    if (getLength === positionsHit) return "ship sank";
  };
  return { length, hit, isSunk };
};

export default Ship;
