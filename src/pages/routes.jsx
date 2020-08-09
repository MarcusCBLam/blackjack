import React from "react";
import { Route, Switch } from "react-router-dom";
import PageHomepage from "./homepage/index";
import PageGame from "./game";
import PageEnd from "./end/index";
import PageDeck from "./deck/index";
import PageInstructions from "./instructions/index";

const redirections = [
  {
    path: "/game",
    component: PageGame,
  },
  {
    path: "/end",
    component: PageEnd,
  },
  {
    path: "/instructions",
    component: PageInstructions,
  },
  {
    path: "/deck",
    component: PageDeck,
  },
  {
    path: "/",
    component: PageHomepage,
  },
];

const routes = redirections.map((route, index) => (
  <Route key={index} {...route} />
));

const Pages = () => <Switch>{routes}</Switch>;

export default Pages;
