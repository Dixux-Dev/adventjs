function treeHeight(tree) {
  function calcHeight(node) {
    if (node === null) {
      return 0;
    }
    const leftHeight = calcHeight(node.left);
    const rightHeight = calcHeight(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
  }
  const result = calcHeight(tree);
  return result;
}
// Definición del árbol
const tree = {
  value: "🎁",
  left: {
    value: "🎄",
    left: {
      value: "⭐",
      left: null,
      right: null,
    },
    right: {
      value: "🎅",
      left: null,
      right: null,
    },
  },
  right: {
    value: "❄️",
    left: null,
    right: {
      value: "🦌",
      left: null,
      right: null,
    },
  },
};

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
console.log(treeHeight(tree));
// Devuelve: 3
