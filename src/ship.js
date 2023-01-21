module.exports = (length) => {
  let hit = 0;
  let sunk = false;

  const isSunk = () => {
      return hit >= length;
  }

  const hitShip = () => {
      hit++;
  }

  const getHit = () => hit;

  return {
      hitShip,
      isSunk,
      getHit,
  }
};
