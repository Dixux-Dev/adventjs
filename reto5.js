function organizeShoes(shoes) {
  const res = [];

  for (let i = 0; i < shoes.length; i++) {
    const { type, size } = shoes[i];
    const pairIndex = shoes.findIndex(
      (shoe) => shoe.size === size && shoe.type != type
    );

    if (pairIndex !== -1) {
      res.push(size);
      shoes.splice(pairIndex, 1);
      shoes.splice(i, 1);

      i--;
    }
  }

  return res;
}

console.log(
  organizeShoes([
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 42 },
  ])
);
