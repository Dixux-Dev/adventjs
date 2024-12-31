const values = {
  "*": 1,
  o: 5,
  "^": 10,
  "#": 50,
  "@": 100,
};
function calculatePrice(ornaments) {
  let res = 0;
  ornaments.split("").forEach((item, index) => {
    if (!values[index]) res = undefined;
    res +=
      values[item] < values[ornaments[index + 1]]
        ? values[item] * -1
        : values[item];
  });
  return res;
}

console.log(calculatePrice("#@Z")); // 5  (-1 + 5 + 1)
