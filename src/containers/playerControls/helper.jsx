export const DispatchStartNewGame = (props) => {
  return props.dispatch({
    type: "START_NEW_GAME",
  });
};

export const DispatchDealerHit = (props) => {
  return props.dispatch({
    type: "DEALER_HIT",
  });
};

export const DispatchPlayerHit = (props) => {
  return props.dispatch({
    type: "PLAYER_HIT",
  });
};

export const DispatchStand = (props) => {
  return props.dispatch({
    type: "STAND",
  });
};

export const DispatchIncrementDealerScore = (props) => {
  return props.dispatch({
    type: "INCREMENT_DEALER_SCORE",
  });
};

export const DispatchIncrementPlayerScore = (props) => {
  return props.dispatch({
    type: "INCREMENT_PLAYER_SCORE",
  });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////

export const AwardPointsToWinnerBeforeNextGame = (props) => {
  const store = props.store;
  return IsStateTrue(store.dealerWins)
    ? DispatchIncrementDealerScore(props)
    : IsStateTrue(store.dealerBust)
    ? DispatchIncrementPlayerScore(props)
    : IsStateTrue(store.playerWins)
    ? DispatchIncrementPlayerScore(props)
    : IsStateTrue(store.playerBust)
    ? DispatchIncrementDealerScore(props)
    : null;
};

export const IsStateTrue = (state) => {
  return state ? true : false;
};

export const DealersTurn = (props) => {

  const playerScore = props.store.handScores.player;
  const dealerScore = props.store.handScores.dealer;

  // dealer will play card if total is less than that of player
  // And if it's a draw, dealer will play too

  dealerScore <= playerScore &&
    setTimeout(() => DispatchDealerHit(props), 1000);
};
