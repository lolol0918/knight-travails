const BOARD_MIN = 0;
const BOARD_MAX = 7;

function knightMoves(x, y) {}

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
