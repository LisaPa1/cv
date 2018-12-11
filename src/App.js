import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Pres from "./Presentation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Pres />
      </div>
    );
  }
}

export default App;
