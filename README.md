# Knight Travails

Find the **shortest path** a knight can take from a start square to a target square on an 8×8 chessboard.

---

## How it works

- Uses **Breadth-First Search (BFS)** to find the shortest path.
- Tracks visited squares so the knight doesn’t revisit.
- Stores parent positions to reconstruct the path.
- Returns an array of squares showing the path from start to target.

---

## Usage

```js
// Example:
knightMoves([0, 0], [3, 3]);
// Output (one possible shortest path):
// [0,0]
// [1,2]
// [3,3]
```

