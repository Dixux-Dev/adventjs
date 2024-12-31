function organizeInventory(inventory) {
  let res = {};

  inventory.forEach(({ name, quantity, category }) => {
    if (!res[category]) {
      res[category] = {};
    }
    if (!res[category][name]) {
      res[category][name] = 0;
    }
    res[category][name] += quantity;
  });

  return res;
}
const inventary = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];

console.log(organizeInventory(inventary));

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }
