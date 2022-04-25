import Ship from "../codes/ship";
import Gameboard from "../codes/gameboard";

describe("test the gameboard factory behavior for", () => {
  const boardToTest = Gameboard();
  const shipToTest = Ship(10);

  test("gameboard to be in 10 x 10 grid format", () => {
    expect(boardToTest.boardArray).toEqual([
      ["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
      ["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
      ["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
      ["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
      ["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
      ["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
      ["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
      ["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
      ["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
      ["~", "~", "~", "~", "~", "~", "~", "~", "~", "~"],
    ]);
  });

  test.only("gameboard placing ship on the accurate coordinates", () => {
    expect(
      boardToTest.placeShip(shipToTest, boardToTest.boardArray[0][9])
    ).toBe(true);
  });
});
