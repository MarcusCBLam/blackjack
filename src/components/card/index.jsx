import React from "react";

const Card = (props) => {
  const { cardID } = props;
  return <img src="/img/transparent.png" alt={cardID} className={cardID}></img>;
};

export default Card;
