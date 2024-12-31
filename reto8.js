function drawRace(indices, length) {
  let res = "";

  indices.forEach((value, index) => {
    const position = value > 0 ? value : length + value;
    const lane = Array.from({ length }, (_, charIndex) =>
      charIndex === position ? "r" : "~"
    ).join("");
    res += `${" ".repeat(indices.length - index - 1)}${lane} /${index + 1}${
      index !== indices.length - 1 ? "\n" : ""
    }`;
  });

  return res;
}

console.log(drawRace([2, -1, 0, 5], 8));
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/
