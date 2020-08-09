export const GetTableMessage = (
  playerHandScore,
  playerBust,
  playerStand,
  playerCardCount,
  dealerWins,
  dealerBust
) => {
  return dealerWins
    ? "DEALER wins!"
    : dealerBust
    ? "DEALER bust! oh yeah!"
    : playerBust
    ? "BUST! Good luck in next round"
    : !dealerBust && !playerBust && playerStand
    ? "waiting ......"
    : playerStand
    ? playerHandScore >= 20
      ? "AWESOME! let see if dealer can beat that!"
      : playerHandScore > 15
      ? "Hmmm... you might be lucky!"
      : "STAND? Seriously?"
    : playerCardCount >= 5
    ? "5 Card Charlie!!!"
    : playerHandScore < 1
    ? "Let's go! Click that button!"
    : "HIT or STICK?";
};

export const GetUserScore = (Score, playerStand = false, user = "player") => {
  // this is to hide the second card under the default rule of issuing 2 cards
  // to the dealer and hiding the second one
  //   const hideScore =
  //     user === "dealer" && playerStand === false && Score > 0 ? true : false;
  //   return hideScore ? "?" : Score > 0 ? Score : "";

  // note: leaving the 2nd and 3rd prop in place in case might want to demo with dealing the dealer 2 cards

  return Score > 0 ? Score : "";
};
