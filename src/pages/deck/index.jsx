import React from "react";
import { suits, faces } from "../../components/cardDeck";
import "../../components/card/card.scss";
import "./deck.scss";
import Card from "../../components/card";

const PageDeck = () => (
  <main id="deck_container">
    <h2>Deck Preview / Test </h2>
    <div>
      <Card cardID="card_back" />
    </div>

    {suits.map((suit, index) => (
      <div key={index}>
        {faces.map((face, index) => (
          <Card key={index} cardID={suit + face} />
        ))}
      </div>
    ))}
  </main>
);

export default PageDeck;
