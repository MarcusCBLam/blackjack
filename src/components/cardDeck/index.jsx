export function GetCardPoints(cardID) {
  // all cardIDs are in the format of [suit][face]
  // therefore we can return the card value from the face of the card
  const face = cardID.slice(-1);
  switch (face) {
    case "A":
      return 11; // check for 11 points value to be implemented in the hand calculation
    case "X":
      return 10;
    case "J":
      return 10;
    case "Q":
      return 10;
    case "K":
      return 10;
    default:
      return parseInt(face);
  }
}

export function TallyHandScore(hand) {
  //console.log("TallyHandScore hand", hand);
  let handTotal = 0;
  hand.forEach((card) => {
    handTotal += GetCardPoints(card);
  });
  //console.log("TallyHandScore handTotal", handTotal);
  return handTotal;
}

export function TallyAces(hand) {
  //console.log("TallyAces hand", hand);
  let aceTotal = 0;
  hand.forEach((card) => {
    if (GetCardPoints(card) === 11) {
      aceTotal += 1;
    }
  });
  //console.log("TallyAces aceTotal", aceTotal);
  return aceTotal;
}

// constants to create the ID for each of the cards
export const suits = ["spade", "heart", "club", "diamond"];
export const faces = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "X", "J", "Q", "K"];

export const GetNewDeck = () => {
  // concat to make the card's ID and points
  const NewDeck = [];
  suits.forEach((suit) => {
    faces.forEach((face) => {
      NewDeck.push(suit + face);
    });
  });
  return NewDeck;
};

export const Shuffle = (deck) => {
  // USe Fisher-Yates algorithm to randomize the deck
  const length = deck.length;
  for (let i = length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
};

export const ShuffleDeck = (deck, qty = 10) => {
  // we can pass a 2nd prop in here to change how many times the deck gets shuffled
  for (let i = 0; i < qty; i++) {
    Shuffle(deck);
  }
  //console.log("shuffled deck: ", deck);
  return deck;
};
