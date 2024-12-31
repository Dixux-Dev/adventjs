function fixGiftList(received, expected) {
  const response = {
    missing: {},
    extra: {},
  };

  const giftCount = {};

  for (const gift of received) {
    giftCount[gift] = (giftCount[gift] || 0) + 1;
  }

  for (const gift of expected) {
    giftCount[gift] = (giftCount[gift] || 0) - 1;
  }

  for (const [gift, count] of Object.entries(giftCount)) {
    if (count > 0) {
      response.extra[gift] = count;
    } else if (count < 0) {
      response.missing[gift] = Math.abs(count);
    }
  }

  return response;
}

fixGiftList(["car", "puzzle", "car"], ["puzzle", "car", "doll"]);
// {
//   "missing": {
//     "doll": 1
//   },
//   "extra": {
//     "car": 1
//   }
// }

fixGiftList(["train", "book", "kite"], ["train", "kite", "book", "kite"]);
// {
//   "missing": {
//     "kite": 1
//   },
//   "extra": {}
// }

// fixGiftList(
//   ["puzzle", "car", "doll", "car"],
//   ["car", "puzzle", "doll", "ball"]
// );
// // Devuelve:
// // {
// //   missing: { ball: 1 },
// //   extra: { car: 1 }
// // }

// fixGiftList(
//   ["book", "train", "kite", "train"],
//   ["train", "book", "kite", "ball", "kite"]
// );
// // Devuelve:
// // {
// //   missing: { ball: 1, kite: 1 },
// //   extra: { train: 1 }
// // }

// fixGiftList(
//   ["bear", "bear", "car"],
//   ["bear", "car", "puzzle", "bear", "car", "car"]
// );
// // Devuelve:
// // {
// //   missing: { puzzle: 1, car: 2 },
// //   extra: {}
// // }

// fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"]);
// // Devuelve:
// // {
// //   missing: {},
// //   extra: {}
// // }
