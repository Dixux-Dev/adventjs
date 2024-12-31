function drawTable(data) {
  const keys = Object.keys(data[0]);
  let res = "";

  const headerLengths = keys.map((key) => {
    return {
      [key]: Math.max(
        ...data.map((item) => String(item[key]).length),
        key.length
      ),
    };
  });

  const hLine = `+${headerLengths
    .map((item) => {
      return "-".repeat(Object.values(item)[0] + 2);
    })
    .join("+")}+`;

  // Header
  res +=
    hLine +
    "\n" +
    "| " +
    headerLengths
      .map((item) => {
        const wordCapitalized =
          Object.keys(item)[0].charAt(0).toUpperCase() +
          Object.keys(item)[0].slice(1);
        return String(wordCapitalized).padEnd(Object.values(item)[0]);
      })
      .join(" | ") +
    " |\n" +
    hLine;

  // Body
  data.forEach((item) => {
    res +=
      "\n" +
      "| " +
      headerLengths
        .map((header) => {
          return String(item[Object.keys(header)[0]]).padEnd(
            Object.values(header)[0]
          );
        })
        .join(" | ") +
      " |";
  });

  return res + "\n" + hLine;
}
console.log(
  drawTable([
    { gift: "Doll", quantity: 10 },
    { gift: "Book", quantity: 5 },
    { gift: "Music CD", quantity: 1 },
  ])
);

// "+----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+"
