// function fixPackages(packages) {
//   let stack = [];

//   for (let i = 0; i < packages.length; i++) {
//     if (packages[i] === "(") stack.push(i);
//     if (packages[i] === ")") {
//       const start = stack.pop();
//       const text = packages.substring(start + 1, i);
//       packages =
//         packages.substring(0, start) +
//         text.split("").reverse("").join("") +
//         packages.substring(i + 1, packages.length);

//       if (text.length > 1) i--;
//     }
//   }
//   return packages;
// }

function fixPackages(packages) {
  let stack = [];
  let packagesChars = packages.split("");

  for (let i = 0; i < packagesChars.length; i++) {
    if (packagesChars[i] === "(") {
      stack.push(i);
    } else if (packagesChars[i] === ")") {
      const start = stack.pop();
      let left = start + 1;
      let right = i - 1;
      while (left < right) {
        [packagesChars[left], packagesChars[right]] = [
          packagesChars[right],
          packagesChars[left],
        ];
        left++;
        right--;
      }
    }
  }
  return packagesChars.filter((c) => c !== "(" && c !== ")").join("");
}

console.log(fixPackages("a(bc)e"));
// ➞ "abcighfedjk"

// a(bcdefg)h
