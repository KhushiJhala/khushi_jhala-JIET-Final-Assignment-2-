import React from "react";
import "./App.css"
import {BrowserRouter as Router , Redirect, Route , Switch,} from "react-router-dom";

import Navbar from "./Navbar"
function App() {
  return (
    <Router>
      <div className={"header"} id={"top"}>
        <Navbar />
      </div>
      <footer className="footer">
        <div className="footerelements"><a> About Us</a></div>
        <div className="footerelements"><a> Contact Us</a></div>
        <div className="footerelements"><a>Back to Top</a></div>
        <div className="footerelements">copyright &copy; 2021-2030 All rights reserved</div>
      </footer>
    </Router>
  );
}

export default App;