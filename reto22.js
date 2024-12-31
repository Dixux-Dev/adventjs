function generateGiftSets(gifts) {
  let result = [];

  function backtrack(start, current) {
    if (current.length > 0) {
      result.push(current);
    }

    for (let i = start; i < gifts.length; i++) {
      backtrack(i + 1, current.concat(gifts[i]));
    }
  }

  backtrack(0, []);

  return result.sort((a, b) => a.length - b.length);
}

console.log(generateGiftSets(["car", "doll", "puzzle"]));
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

// console.log(generateGiftSets(["ball"]));
// [
//   ['ball']
// ]

console.log(generateGiftSets(["game", "pc"]));
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
