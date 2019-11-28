import React, { Component } from "react";
import { deck, shuffleDeck } from "./helpers/deckHelper.js";
// import { houseWay } from "./helpers/houseWay.js";

class App extends Component {
  state = {
    deck: shuffleDeck(deck),
    handOf4: [],
    hand: []
  };

  componentDidMount() {
    let handOf4 = [];
    for (let i = 0; i < 4; i++) {
      let index = Math.floor(Math.random() * 32);
      const tile = deck.slice(index, 1);
      handOf4.push(tile);
    }
    this.setState({ handOf4: handOf4 });
  }

  houseWay = () => {
    // const houseWay = houseWay(this.state.hand);
    // this.setState({ hand: houseWay });
  };

  render() {
    const fourTiles = this.state.handOf4.map((card, index) => {
      return (
        <div key={index} id="tile-{index}">
          {card.name}
        </div>
      );
    });
    return (
      <React.Fragment>
        <div className="app">
          <p>The 4 tiles are:</p>
          {fourTiles}
          <p>The house way is:</p>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
