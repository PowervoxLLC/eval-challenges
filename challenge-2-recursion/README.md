# Grid Path Finder Challenge

## Problem Description

Given a 2D grid of size m x n, find all possible paths from the top-left corner (0,0) to the bottom-right corner (m-1,n-1). You can only move right or down at any point in time.

### Input

- A 2D grid represented as an array of arrays
- Each cell in the grid can be either:
  - 0: represents a valid path
  - 1: represents an obstacle that cannot be passed

### Output

- An array of arrays, where each inner array represents a valid path
- Each path is represented as a sequence of coordinates [row, column]
- The path must start at [0,0] and end at [m-1,n-1]

### Example

```javascript
const grid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

// Expected output:
[
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
    [2, 2],
  ],
];
```

### Constraints

- 1 <= m, n <= 10
- The grid will always have at least one valid path
- The start and end positions will always be valid (0)

### Requirements

- Implement the solution using recursion
- Handle edge cases appropriately
- Optimize the solution to avoid unnecessary computations
- Include proper error handling

### Bonus

- Implement a solution that finds the shortest path
- Add support for diagonal moves
- Implement memoization to optimize the solution
