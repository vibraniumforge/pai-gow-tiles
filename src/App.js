import React, { Component } from "react";
import { deck, shuffleDeck } from "./helpers/deckHelper.js";
import { houseWay } from "./helpers/houseWay.js";

class App extends Component {
  state = {
    deck: shuffleDeck(deck),
    handOf4: [],
    houseWayHand: []
  };

  componentDidMount() {
    let handOf4 = [];
    const { deck } = this.state;
    console.log(deck);
    for (let i = 0; i < 4; i++) {
      let index = Math.floor(Math.random() * deck.length);
      const tile = this.state.deck.splice(index, 1)[0];
      handOf4.push(tile);
    }
    this.setState({ handOf4: handOf4 }, () => this.setHouseWay());
  }

  setHouseWay = () => {
    const houseWayAr = houseWay(this.state.handOf4);
    this.setState({ houseWayHand: houseWayAr });
  };

  render() {
    const fourTiles = this.state.handOf4.map((card, index) => {
      return (
        <div key={index} id={`tile-${index}`}>
          {card.name}
        </div>
      );
    });
    // const houseWayHand = this.state.houseWayHand.map((card, index) => {
    //   return (
    //     <div key={index} id={`tile-${index}`}>
    //       {card.name}
    //     </div>
    //   );
    // });
    return (
      <React.Fragment>
        <div className="app">
          <p>Your hand is:</p>
          {fourTiles}
          The house way is:
          {/* {houseWayHand} */}
        </div>
      </React.Fragment>
    );
  }
}
export default App;
