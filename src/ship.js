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

  const isHit = (x, y) => {
    return x === this.x && y === this.y;
}
  return {
      hitShip,
      isSunk,
      getHit,
      isHit,
  }
};
