const twoPairStrategy = sortedAscendingHand => {
  let lowHand = [];
  let highHand = [];
  let finalHand = [];
  lowHand.push(sortedAscendingHand[0]);
  lowHand.push(sortedAscendingHand[1]);
  highHand.push(sortedAscendingHand[2]);
  highHand.push(sortedAscendingHand[3]);
  finalHand.push(lowHand);
  finalHand.push(highHand);
  return finalHand;
};

export { twoPairStrategy };
