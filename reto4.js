function generateTriangle(height, ornament) {
  let tree = "";
  for (let i = 1; i <= height; i++) {
    tree +=
      "_".repeat(height - i) +
      ornament.repeat(i - 1) +
      ornament.repeat(i) +
      "_".repeat(height - i) +
      "\n";
  }
  for (let j = 0; j < 2; j++) {
    tree += "_".repeat(height - 1) + "#" + "_".repeat(height - 1) + "\n";
  }

  return tree.slice(0, -1);
}

console.log(generateTriangle(100, "+"));
