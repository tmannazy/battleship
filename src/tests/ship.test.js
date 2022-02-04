import Ship from "../codes/ship";

describe("test the ship factory behaviour", () => {
  const shipUnderTest = Ship(5);

  test("the correct length of a ship", () => {
    expect(shipUnderTest.length).toEqual(5);
  });

  test("player's ship was hit correctly", () => {
    expect(shipUnderTest.hit(2)).toBe("hit");
  });

  test("takes a number and mark the position hit", () => {
    const shipUnderTest = Ship();
    expect(shipUnderTest.length(4)).toEqual(4);
  });

  test("opponent ship totally destroyed", () => {
    const shipUnderTest = Ship();
    expect(shipUnderTest.isSunk(4)).toEqual(
      expect(shipUnderTest.length(4)).toBe(true)
    );
  });
});
