import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/Privacy-Policy";

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <PrivacyPolicy path="privacy-policy" />
      </Router>
    );
  }
}

export default App;
