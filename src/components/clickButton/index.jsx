import React from "react";

const clickButton = (props) => {
  const { text, id, onclick, css = "primary", disabled = false } = props;

  const newCss = disabled === true ? "disabled" : css;

  const newonclick = disabled === true ? null : onclick;

  return (
    <div id={id} className={newCss} onClick={newonclick}>
      {text}
    </div>
  );
};

export default clickButton;
