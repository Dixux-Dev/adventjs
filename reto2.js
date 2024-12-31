function createFrame(names) {
  let maxLength = names[0].length;
  names.forEach((name) => {
    if (name.length > maxLength) maxLength = name.length;
  });

  return (
    "*".repeat(maxLength + 4) +
    "\n" +
    names
      .map(
        (name) =>
          "* " + name + " ".repeat(maxLength - name.length) + " *" + "\n"
      )
      .join("") +
    "*".repeat(maxLength + 4)
  );
}

console.log(createFrame(["midu", "madeval", "educalvolpz"]));

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

//TODO: intentar con padend
