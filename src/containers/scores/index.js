import React from "react";
import { connect } from "react-redux";

import "./scores.scss";

class Scores extends React.Component {
  render() {
    const { dealer: DealerScore, player: PlayerScore } = this.props.scores;

    return (
      <div id="scores">
        <div className="score_label">DEALER</div>
        <div className="score_number">{DealerScore || 0}</div>
        <div className="score_colon">:</div>
        <div className="score_number">{PlayerScore || 0}</div>
        <div className="score_label">PLAYER</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { scores: state.gameScores };
};

export default connect(mapStateToProps)(Scores);
