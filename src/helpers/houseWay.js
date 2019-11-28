const houseWay = hand => {
  let highHand = [];
  let lowHand = [];

  for (let i = 0; i < hand.length; i++) {
    for (let j = 1; j < hand.length; j++) {
      if (hand[i].pair_id === hand[j].pair_id) {
        for (let k = 0; k < hand.length; k++) {
          if (k !== i && k !== j) {
            lowHand.push(hand[k]);
          }
        }
        highHand.push(hand[i], hand[j]);
        return [[lowHand], [highHand]];
      }
    }
  }
  for (let l = 0; l < hand.length; l++) {
    for (let m = 0; m < hand.length; m++) {
      if (l.special) {
        if (m.value === 7 || m.value === 8 || m.value === 9) {
          highHand.push(hand[l]);
        }
      }
    }
  }

  return [[lowHand], [highHand]];
};

export { houseWay };
