const Game = require("../src/game.js");
const Player = require("../src/player.js");
const Cards = require("../src/card.js");

describe("Testing if players have been dealt cards", () => {
    test("Cards should be dealt", function () {
        // Arrange - do the set up required
        const game = new Game();
        const cards = new Cards();
        const player0 = new Player("Player 1");
        const player1 = new Player("Player 2");
        // Act - do the thing we want to test
        cards.createDeck();
        game.dealCards();
        // Assert - make sure it happens correctly
        expect(player0.countCards).toBe(26);
        expect(player1.countCards).toBe(26);
    })
});

