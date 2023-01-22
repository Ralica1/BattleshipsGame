const Ship = require("./ship");

const Gameboard = () => {
  const ships = [];
  const missedAttacks = [];

  const placeShip = (x, y, length, orientation) => {
    const ship = Ship(length);
    ship.x = x;
    ship.y = y;
    ship.orientation = orientation;
    ships.push(ship);
    };

  const receiveAttack = (x, y) => {
    let hit = false;

    ships.forEach((ship) => {
      if (ship.x === x && ship.y === y) {
        ship.hitShip();
        hit = true;
      }
    });
    
    if (!hit) {
      missedAttacks.push({ x, y });
    }
    };

  const allSunk = () => {
    let isAllSunk = true;

    ships.forEach((ship) => {
      if (!ship.isSunk()) {
        isAllSunk = false;
      }
    });

    return isAllSunk;
  };
  return {
    placeShip,
    receiveAttack,
    allSunk,
  };
};

module.exports = Gameboard;
