const Gameboard = require('../src/gameboard');

describe("Gameboard", () => {
    let gameboard;

    beforeEach(() => {
        gameboard = Gameboard();
    });

    test("should be able to place ships at specific coordinates", () => {
        gameboard.placeShip(1, 2, 3, 'horizontal');
        expect(gameboard.ships.length).toBe(1);
    });

    test("should have a receiveAttack function that sends 'hit' function to the correct ship or records the coordinates of the missed shot", () => {
        gameboard.placeShip(1, 2, 3, 'horizontal');
        gameboard.receiveAttack(1, 2);
        expect(gameboard.ships[0].hit).toBe(1);
        gameboard.receiveAttack(4, 5);
        expect(gameboard.missedAttacks.length).toBe(1);
    });

    test("should keep track of missed attacks", () => {
        gameboard.receiveAttack(4, 5);
        expect(gameboard.missedAttacks.length).toBe(1);
    });

    test("should be able to report whether or not all of their ships have been sunk", () => {
        gameboard.placeShip(1, 2, 3, 'horizontal');
        gameboard.receiveAttack(1, 2);
        gameboard.receiveAttack(1, 3);
        gameboard.receiveAttack(1, 4);
        expect(gameboard.allSunk()).toBe(true);
    });
});
