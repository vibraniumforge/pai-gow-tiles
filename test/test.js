let numTrue = 0;
let numFalse = 0;

function testStuff(num) {
  for (let i = 0; i < num; i++) {
    let handOf4 = [];
    for (let j = 0; j < 4; j++) {
      let newDeck = shuffleDeck(deck).slice();
      let index = Math.floor(Math.random() * newDeck.length);
      const tile = newDeck.splice(index, 1)[0];
      handOf4.push(tile);
    }
    houseWay(handOf4) ? numTrue++ : numFalse++;
  }
  console.log("numFalse=", numFalse);
  console.log("numTrue=", numTrue);
  console.log("numTrue / num", numTrue / num);
  return numTrue / num;
}

const houseWay = handOf4 => {
  let hasAPair = false;

  for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 4; j++) {
      if (handOf4[i].pair_id === handOf4[j].pair_id) {
        // console.log(handOf4[0].pair_id);
        // console.log(handOf4[1].pair_id);
        // console.log(handOf4[2].pair_id);
        // console.log(handOf4[3].pair_id);
        // console.log(hasAPair);
        hasAPair = true;
      }
    }
  }
  // console.log(handOf4[0].pair_id);
  // console.log(handOf4[1].pair_id);
  // console.log(handOf4[2].pair_id);
  // console.log(handOf4[3].pair_id);
  // console.log(hasAPair);
  // console.log("+======================");
  return hasAPair;
};

const deck = [
  {
    id: 1,
    name: "First Tien",
    translation: "Sky",
    description: "",
    pair_id: 2,
    value: 2,
    singleRank: 1,
    pairRank: 2,
    special: true,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 2,
    name: "Second Tien",
    translation: "Sky",
    description: "",
    pair_id: 2,
    value: 2,
    singleRank: 1,
    pairRank: 2,
    special: true,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 3,
    name: "First Dei",
    translation: "Earth",
    description: "",
    pair_id: 3,
    value: 2,
    singleRank: 2,
    pairRank: 3,
    special: true,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 4,
    name: "Second Dei",
    translation: "Earth",
    description: "",
    pair_id: 3,
    value: 2,
    singleRank: 2,
    pairRank: 3,
    special: true,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 5,
    name: "First Yun",
    translation: "Blood",
    description: "",
    pair_id: 4,
    value: 8,
    singleRank: 3,
    pairRank: 4,
    special: false,
    canSpecialCombination: true,
    imageFront: "",
    image4back: ""
  },
  {
    id: 6,
    name: "Second Yun",
    translation: "Blood",
    description: "",
    pair_id: 4,
    value: 8,
    singleRank: 3,
    pairRank: 4,
    special: false,
    canSpecialCombination: true,
    imageFront: "",
    image4back: ""
  },
  {
    id: 7,
    name: "First Gnor",
    translation: "Goose",
    description: "",
    pair_id: 5,
    value: 4,
    singleRank: 4,
    pairRank: 5,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 8,
    name: "Second Gnor",
    translation: "Goose",
    description: "",
    pair_id: 5,
    value: 4,
    singleRank: 4,
    pairRank: 5,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 9,
    name: "First Mooi",
    translation: "Plum Flowers",
    description: "",
    pair_id: 6,
    value: 10,
    singleRank: 5,
    pairRank: 6,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 10,
    name: "Second Mooi",
    translation: "Plum Flowers",
    description: "",
    pair_id: 6,
    value: 10,
    singleRank: 5,
    pairRank: 6,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 11,
    name: "First Chong",
    translation: "A Long Dress",
    description: "",
    pair_id: 7,
    value: 6,
    singleRank: 6,
    pairRank: 7,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 12,
    name: "Second Chong",
    translation: "A Long Dress",
    description: "",
    pair_id: 7,
    value: 6,
    singleRank: 6,
    pairRank: 7,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 13,
    name: "First Bon",
    translation: "Bench",
    description: "",
    pair_id: 8,
    value: 4,
    singleRank: 7,
    pairRank: 8,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 14,
    name: "Second Bon",
    translation: "Bench",
    description: "",
    pair_id: 8,
    value: 4,
    singleRank: 7,
    pairRank: 8,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 15,
    name: "First Foo",
    translation: "Axe",
    description: "",
    pair_id: 9,
    value: 11,
    singleRank: 8,
    pairRank: 9,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 16,
    name: "Second Foo",
    translation: "Axe",
    description: "",
    pair_id: 9,
    value: 11,
    singleRank: 8,
    pairRank: 9,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 17,
    name: "First Ping",
    translation: "Board",
    description: "",
    pair_id: 10,
    value: 10,
    singleRank: 9,
    pairRank: 10,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 18,
    name: "Second Ping",
    translation: "Board",
    description: "",
    pair_id: 10,
    value: 10,
    singleRank: 9,
    pairRank: 10,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 19,
    name: "First Matched Seven",
    translation: "Seven",
    description: "Mathced Seven",
    pair_id: 11,
    value: 7,
    singleRank: 10,
    pairRank: 11,
    special: false,
    canSpecialCombination: true,
    imageFront: "",
    image4back: ""
  },
  {
    id: 20,
    name: "Second Matched Seven",
    translation: "Seven",
    description: "Mathced Seven",
    pair_id: 11,
    value: 7,
    singleRank: 10,
    pairRank: 11,
    special: false,
    canSpecialCombination: true,
    imageFront: "",
    image4back: ""
  },
  {
    id: 20,
    name: "First Matched Six",
    translation: "Six",
    description: "Mathced Six",
    pair_id: 12,
    value: 6,
    singleRank: 11,
    pairRank: 12,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 21,
    name: "Second Matched Six",
    translation: "Six",
    description: "Mathced Six",
    pair_id: 12,
    value: 6,
    singleRank: 11,
    pairRank: 12,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 23,
    name: "First Mixed Nine",
    translation: "Nine",
    description: "6 + 3 Nine",
    pair_id: 13,
    value: 9,
    singleRank: 12,
    pairRank: 13,
    special: false,
    canSpecialCombination: true,
    imageFront: "",
    image4back: ""
  },
  {
    id: 24,
    name: "Second Mixed Nine",
    description: "5 + 4 Nine",
    pair_id: 13,
    translation: "Nine",
    value: 9,
    singleRank: 12,
    pairRank: 13,
    special: false,
    canSpecialCombination: true,
    imageFront: "",
    image4back: ""
  },
  {
    id: 25,
    name: "First Mixed Eight",
    description: "5 + 3 Eight",
    translation: "Eight",
    pair_id: 14,
    value: 8,
    singleRank: 13,
    pairRank: 14,
    special: false,
    canSpecialCombination: true,
    imageFront: "",
    image4back: ""
  },
  {
    id: 26,
    name: "Second Mixed Eight",
    description: "4 + 4 Eight",
    translation: "Eight",
    pair_id: 14,
    value: 8,
    singleRank: 13,
    pairRank: 14,
    special: false,
    canSpecialCombination: true,
    imageFront: "",
    image4back: ""
  },
  {
    id: 27,
    name: "First Mixed Seven",
    description: "5 + 2 Seven",
    translation: "Seven",
    pair_id: 15,
    value: 7,
    singleRank: 14,
    pairRank: 15,
    special: false,
    canSpecialCombination: true,
    imageFront: "",
    image4back: ""
  },
  {
    id: 28,
    name: "Second Mixed Seven",
    description: "4 + 3 Seven",
    translation: "Seven",
    pair_id: 15,
    value: 7,
    singleRank: 14,
    pairRank: 15,
    special: false,
    canSpecialCombination: true,
    imageFront: "",
    image4back: ""
  },
  {
    id: 29,
    name: "First Mixed Five",
    description: "4 + 1 Five",
    translation: "Five",
    pair_id: 16,
    value: 5,
    singleRank: 15,
    pairRank: 16,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 30,
    name: "Second Mixed Five",
    description: "3 + 2 Five",
    translation: "Five",
    pair_id: 16,
    value: 5,
    singleRank: 15,
    pairRank: 16,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 31,
    name: "First Joker",
    description: "4 + 2 Six",
    translation: "Joker ",
    pair_id: 1,
    value: 3 || 6,
    singleRank: 16,
    pairRank: 1,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  },
  {
    id: 32,
    name: "Second Joker",
    description: "2 + 1 Three",
    translation: "Joker ",
    pair_id: 1,
    value: 3 || 6,
    singleRank: 16,
    pairRank: 1,
    special: false,
    canSpecialCombination: false,
    imageFront: "",
    image4back: ""
  }
];

function shuffleDeck(deck) {
  // Using Fisher-Yates algo
  for (let i = 0; i < 2000; i++) {
    const index1 = Math.floor(Math.random() * 32);
    const index2 = Math.floor(Math.random() * 32);
    const temp = deck[index1];
    deck[index1] = deck[index2];
    deck[index2] = temp;
  }
  return deck;
}

// export { deck, shuffleDeck };

testStuff(1000);
