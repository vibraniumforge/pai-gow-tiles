const houseWay = hand => {
  let highHand = [];
  let lowHand = [];
  let finalHand = [];

  // check for pairs

  debugger;

  const sortedByPairHand = hand.slice().sort((a, b) => b.pairRank - a.pairRank);
  let hasAPair = false;

  // create object with amount of each pair, sorted ascending
  let sortedHandResult = {};
  for (let iterator of sortedByPairHand) {
    if (sortedHandResult[iterator.pair_id]) {
      sortedHandResult[iterator.pair_id] += 1;
    } else {
      sortedHandResult[iterator.pair_id] = 1;
    }
  }

  // if pair/pair, push lowest 2 into low, and highest 2 into high and return
  if (
    sortedHandResult.length === 2 &&
    Object.values(sortedHandResult) === [2, 2]
  ) {
    lowHand.push(sortedByPairHand[0]);
    lowHand.push(sortedByPairHand[1]);
    highHand.push(sortedByPairHand[2]);
    highHand.push(sortedByPairHand[3]);
    finalHand.push(lowHand);
    finalHand.push(highHand);
    return finalHand;
  } else {
    onePair: for (let i = 0; i < 3; i++) {
      for (let j = i + 1; j < 4; j++) {
        if (sortedByPairHand[i].pair_id === sortedByPairHand[j].pair_id) {
          console.log(sortedByPairHand[i]);
          console.log(sortedByPairHand[j]);
          highHand.push(sortedByPairHand.splice(j, j + 1)[0]);
          highHand.push(sortedByPairHand.splice(i, i + 1)[0]);
          console.log(sortedByPairHand);
          hasAPair = true;
          break onePair;
        }
      }
    }
    if (hasAPair) {
      sortedByPairHand.forEach(tile => {
        lowHand.push(tile);
      });
    }
    console.log(sortedByPairHand);
    console.log(lowHand);
    console.log(highHand);
    finalHand.push(lowHand);
    finalHand.push(highHand);
    console.log(finalHand);
    return finalHand;
  }
};

export { houseWay };
