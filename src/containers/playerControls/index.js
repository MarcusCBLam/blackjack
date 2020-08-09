import React from "react";
import { connect } from "react-redux";

import {
  DispatchStartNewGame,
  DispatchPlayerHit,
  DispatchStand,
  AwardPointsToWinnerBeforeNextGame,
  DealersTurn,
} from "./helper";

import "./playerControls.scss";
import ClickButton from "../../components/clickButton";

class PlayerControls extends React.Component {
  constructor() {
    super();
    this.clickStart = this.clickStart.bind(this);
    this.clickHit = this.clickHit.bind(this);
    this.clickStand = this.clickStand.bind(this);
  }

  componentDidUpdate() {
    const { playerStand } = this.props.store;
    playerStand && DealersTurn(this.props);
  }

  clickStart() {
    AwardPointsToWinnerBeforeNextGame(this.props);
    DispatchStartNewGame(this.props);
  }

  clickHit() {
    DispatchPlayerHit(this.props);
  }

  clickStand() {
    DispatchStand(this.props);
  }

  render() {
    const {
      playerBust,
      playerStand,
      handScores,
      playerHand,
    } = this.props.store;

    const disableHitButton =
      playerBust === true ||
      handScores.player < 1 ||
      playerStand === true ||
      playerHand.length > 5
        ? true
        : false;

    const disableStandButton =
      playerBust === true || handScores.player < 1 || playerStand === true
        ? true
        : false;

    return (
      <div id="playerControls">
        <ClickButton
          text="START NEW GAME"
          css="game_button"
          onclick={this.clickStart}
        />
        <ClickButton
          text="HIT"
          css="game_button"
          onclick={this.clickHit}
          disabled={disableHitButton}
        />
        <ClickButton
          text="STICK"
          css="game_button"
          onclick={this.clickStand}
          disabled={disableStandButton}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  store: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerControls);
