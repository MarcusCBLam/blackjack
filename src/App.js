import React from "react";
import Pages from "./pages/routes";
import Footer from "./containers/footer/index.jsx";
import Header from "./containers/header/index.jsx";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Pages />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
