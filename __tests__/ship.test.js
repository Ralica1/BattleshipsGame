const Ship = require('../src/ship');

describe("Ship", () => {
  let ship;

  beforeEach(() => {
    ship = Ship(3);
  });

  test("should increase number of hits when hitShip() is called", () => {
    ship.hitShip();
    expect(ship.getHit()).toBe(1);
  });

  test("should mark ship as sunk when hit enough times", () => {
    ship.hitShip();
    ship.hitShip();
    ship.hitShip();
    expect(ship.isSunk()).toBe(true);
  });
});