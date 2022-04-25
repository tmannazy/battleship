const Ship = (length) => {
  const shipArray = Array(length).fill(null);

  const hit = (position) => {
    const shipsHit = shipArray.forEach((element, index, array) => {
      if (array[index] !== "hit" && index === position) {
        array[index] = "hit";
      }
    });
    return shipsHit;
  };

  const isSunk = () => {
    const shipSunkComplete = shipArray.every((element) => element === "hit");
    return shipSunkComplete;
  };

  const getShipArray = () => [...shipArray];

  const isPositionMarked = (val) => {
    const checkPosition = shipArray.forEach((element, index) => {
      if (index === val) {
        throw new Error("position already marked");
      }
    });
    // return checkPosition;
  };

  //   const vCoordinate = () => {
  // getShipArray.

  //   };

  return { length, hit, isSunk, getShipArray, isPositionMarked };
};

export default Ship;
