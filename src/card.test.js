const Cards = require("../src/card.js");

describe("Testing all cards in deck", () => {
    test("deck initializes with 52 cards", function () {
        // Arrange - do the set up required
        const cards = new Cards();
        // Act - do the thing we want to test
        cards.createDeck();
        // Assert - make sure it happens correctly
        const lengthOfCard = cards.deck.length;
        expect(lengthOfCard).toBe(52);
    })
});
