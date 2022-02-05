const Ship = (length) => {
  const shipArray = Array(length).fill(null);

  const hit = (position) => {
    shipArray.forEach((element, index, array) => {
      if (array[index] !== "hit" && index === position) {
        array[index] = "hit";
      } else if (array[index] === "hit") {
        return false;
      }
    });
    return shipArray;
  };

  const isSunk = () => {
    const shipSunkComplete = shipArray.every((element) => element === "hit");
    return shipSunkComplete;
  };

  const getShipArray = () => [...shipArray];

  return { length, hit, isSunk, getShipArray };
};

export default Ship;
