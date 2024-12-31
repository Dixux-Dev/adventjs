function inBox(box) {
  let isInBox = false;

  box.forEach((line, index) => {
    if (
      line.replace(/\s+/g, "") === "#*#" &&
      index !== 0 &&
      index !== box.length - 1
    ) {
      isInBox = true;
    }
  });

  return isInBox;
}

inBox(["####", "#* #", "#  #", "####"]); // ➞ true

inBox(["#####", "#   #", "#  #*", "#####"]); // ➞ false

inBox(["#####", "#   #", "#   #", "#   #", "#####"]); // ➞ false
