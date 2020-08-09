import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Pages = [
  {
    url: "/deck",
    title: "Show Cards",
  },
  {
    url: "/instructions",
    title: "How To Play",
  },
  {
    url: "/game",
    title: "Play Game",
  },
  {
    url: "/",
    title: "Home",
  },
];

const Header = () => (
  <header>
    <div className="game_title">blackJack</div>
    <nav>
      <ul>
        {Pages.map((page, index) => (
          <li key={index}>
            <Link to={page.url}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
export default Header;
