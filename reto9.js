function moveTrain(board, mov) {
  const DIRECTIONS = {
    U: { x: 0, y: -1 },
    D: { x: 0, y: 1 },
    L: { x: -1, y: 0 },
    R: { x: 1, y: 0 },
  };

  const CELL_TYPES = {
    EMPTY: "·",
    FRUIT: "*",
    HEAD: "@",
    BODY: "o",
  };

  let head = { x: 0, y: 0 };
  const train = new Set();
  let fruit = { x: 0, y: 0 };

  // Get the train, head and fruit position
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      if (cell === CELL_TYPES.FRUIT) {
        fruit = { x: j, y: i };
      } else if (cell === CELL_TYPES.HEAD) {
        head = { x: j, y: i };
        train.add(`${j},${i}`);
      } else if (cell === CELL_TYPES.BODY) {
        train.add(`${j},${i}`);
      }
    }
  }

  const newHead = {
    x: head.x + DIRECTIONS[mov].x,
    y: head.y + DIRECTIONS[mov].y,
  };

  // Check collision with wall
  if (
    newHead.x < 0 ||
    newHead.x >= board[0].length ||
    newHead.y < 0 ||
    newHead.y >= board.length
  ) {
    return "crash";
  }

  // Check collision with itself

  if (train.has(`${newHead.x},${newHead.y}`)) {
    return "crash";
  }

  // Check if the new head is in the fruit
  if (newHead.x === fruit.x && newHead.y === fruit.y) {
    return "eat";
  }

  return "none";
}

const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "U"));
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, "D"));
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, "L"));
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, "R"));
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha

console.log(moveTrain(["·····", "··*··", "··.··", "··o··", "··@··"], "D"));
// ➞ 'crash'

console.log(moveTrain(["·····", "·····", "*·o@·", "··o··", "··o··"], "L"));
// ➞ 'crash'
