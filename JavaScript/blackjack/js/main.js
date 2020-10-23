const player1 = "player1"
const player2 = "player2"

let deckPromise = fetch(
    'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
).then((response) => response.json());

// deckPromise.then((deck) => {
//     // call to draw two cards
//     fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=2`)
//         .then((response) => response.json())
//         .then((data) => {
//             printCards(data.cards, player1);
//             printCards(data.cards, player2);
//         });
// });

function getCards(deckId, cardCount) {
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardCount}`)
    .then((response) => response.json());
}

deckPromise.then(deck => {
    getCards(deck.deck_id, 2).then(data => printCards(data.cards, player1));
    getCards(deck.deck_id, 2).then(data => printCards(data.cards, player2));

})

function printCards(cards, playerId) {
    cards.forEach(card => {
        let cardHtml = `
            <div>
                <img src="${card.image}">
            </div>
        `;
        document.getElementById(playerId).innerHTML += cardHtml;
    });
}

function hitMe(playerId) {
    deckPromise.then(deck => {
        getCards(deck.deck_id, 1).then(data => {
            printCards(data.cards, playerId)
        })
    })
}