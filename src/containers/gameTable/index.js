import React from "react";
import { connect } from "react-redux";
import PlayerHand from "../../components/playerHand";
import { GetTableMessage, GetUserScore } from "./helper";

import "./gameTable.scss";

class GameTable extends React.Component {
  render() {
    const {
      dealerHand,
      playerHand,
      handScores,
      playerBust,
      playerStand,
      dealerWins,
      dealerBust,
    } = this.props.store;
    const dealerHandScore = handScores.dealer || 0;
    const playerHandScore = handScores.player || 0;
    const playerCardCount = playerHand.length;

    return (
      <div id="gameTable">
        <div className="tablePlayerName">DEALER</div>
        <div className="tableCardRowTop">
          <div className="tableScore">
            {GetUserScore(dealerHandScore, playerStand, "dealer")}
          </div>
          <div className="tableCards">
            <PlayerHand
              hand={dealerHand}
              user="dealer"
              dealerHandScore={dealerHandScore}
              playerStand={playerStand}
            />
          </div>
        </div>
        <div className="tableInstructions">
          {GetTableMessage(
            playerHandScore,
            playerBust,
            playerStand,
            playerCardCount,
            dealerWins,
            dealerBust
          )}
        </div>
        <div>
          <div className="tableCardRowBottom">
            <div className="tableCards">
              <PlayerHand hand={playerHand} />
            </div>
            <div className="tableScore">{GetUserScore(playerHandScore)}</div>
          </div>
        </div>
        <div className="tablePlayerName">PLAYER</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { store: state };
};

export default connect(mapStateToProps)(GameTable);
