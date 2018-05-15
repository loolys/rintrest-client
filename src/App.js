import React, { Component } from "react";
import AllPinsContainer from "./Containers/AllPinsContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Navigatin goes here</header>

        <AllPinsContainer />
      </div>
    );
  }
}

export default App;
