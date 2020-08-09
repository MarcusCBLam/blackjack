import React from "react";
import { Link } from "react-router-dom";

import "./button.scss";

const LinkButton = (props) => {
  const { text, url, id, css = "primary" } = props;

  return (
    <Link to={url} id={id} className={css}>
      {text}
    </Link>
  );
};

export default LinkButton;
