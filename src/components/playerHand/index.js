import React from "react";
import Card from "../../components/card";

class PlayerHand extends React.Component {
  render() {
    const {
      hand,
      user = "",
      dealerHandScore = 0,
      playerStand = false,
    } = this.props;

    const coverDealerCard =
      user === "dealer" && playerStand === false && dealerHandScore > 0
        ? true
        : false;

    return (
      <div>
        {hand.length > 0 ? (
          hand.map((card, index) => (
            // cover the dealer's 2nd card until the player has selected STAND
            <Card
              key={index}
              cardID={index === 1 && coverDealerCard ? "card_back" : card}
            />
          ))
        ) : (
          <>
            <Card cardID="empty"></Card>
            <Card cardID="empty"></Card>
          </>
        )}
      </div>
    );
  }
}

export default PlayerHand;
