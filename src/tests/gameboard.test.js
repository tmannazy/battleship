import Ship from "../codes/ship";
import Gameboard from "../codes/gameboard";

describe("test the gameboard factory behavior for", () => {
  const boardUnderTest = Gameboard();

  test("gameboard to be in 10 x 10 grid format", () => {
    expect(boardUnderTest.boardArray).toEqual([
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

  test('ship length is placed correctly on the board', () => {
    expect(boardUnderTest.)
  })
});
