import Ship from "../codes/ship";

describe("test the ship factory behavior", () => {
  const shipUnderTest = Ship(5);

  test("the correct length of a ship", () => {
    expect(shipUnderTest.length).toEqual(5);
  });

  test("player's ship hit targeted position correctly", () => {
    shipUnderTest.hit(2);
    expect(shipUnderTest.getShipArray().at(2)).toBe("hit");
  });

  test("when ship sinks, ship array must be correctly marked and isSunk should be true", () => {
    shipUnderTest.hit(0);
    shipUnderTest.hit(1);
    shipUnderTest.hit(2);
    shipUnderTest.hit(3);
    shipUnderTest.hit(4);
    expect(shipUnderTest.getShipArray()).toEqual([
      "hit",
      "hit",
      "hit",
      "hit",
      "hit",
    ]);
    expect(shipUnderTest.isSunk()).toBe(true);
  });
});
