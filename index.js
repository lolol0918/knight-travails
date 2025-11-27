const BOARD_MIN = 0;
const BOARD_MAX = 7;

function knightMoves(start, target) {
  const visited = new Set();

  const queue = [];
  queue.push(start);
  visited.add(`${start[0]},${start[1]}`);

  while (queue.length > 0) {
    const current = queue.shift();

    if (current[0] === target[0] && current[1] === target[1]) {
      return;
    }

    const neighbors = getMoves(current);

    for (const [nr, nc] of neighbors) {
      const key = `${nr},${nc}`;

      if (!visited.has(key)) {
        visited.add(key);
        queue.push([nr, nc]);
      }
    }
  }
}

function getMoves(pos) {
  const offsets = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const [r, c] = pos;

  const moves = [];

  for (let [dr, dc] of offsets) {
    const newR = r + dr;
    const newC = c + dc;

    if (newR >= 0 && newR <= 7 && newC >= 0 && newC <= 7) {
      moves.push([newR, newC]);
    }
  }

  return moves;
}

console.log(getMoves([0, 0]));

console.log(getMoves([3, 3]));
