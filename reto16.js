function removeSnow(s) {
  const regex = /(\w)\1/;
  let res = s;

  while (regex.test(res)) {
    res = res.replace(regex, "");
  }

  return res;
}

console.log(removeSnow("zxxzoz")); // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(removeSnow("abcdd")); // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

console.log(removeSnow("zzz")); // -> "z"
// 1. Eliminamos "zz", quedando "z"

console.log(removeSnow("a")); // -> "a"
// No hay montículos repetido
