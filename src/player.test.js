const Player = require("../src/player.js");

describe("Testing players count cards corretly", () => {
    test("", function () {
        // Arrange - do the setup required
        const cards = new Cards();
        // Act - do the thing we want to test
        cards.createDeck();
        // Assert - make sure it happens correctly
        const lengthOfCard = cards.deck.length;
        expect(lengthOfCard).toBe(52);
    })
});