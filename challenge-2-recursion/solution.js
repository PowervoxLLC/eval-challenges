/**
 * Finds all possible paths from top-left to bottom-right in a grid
 * @param {number[][]} grid - 2D grid where 0 represents a valid path and 1 represents an obstacle
 * @returns {number[][][]} - Array of all possible paths, where each path is an array of coordinates
 * @throws {Error} - If grid is invalid or empty
 */
function findAllPaths(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    throw new Error("Invalid grid: grid must be non-empty");
  }

  if (grid[0][0] === 1 || grid[grid.length - 1][grid[0].length - 1] === 1) {
    throw new Error("Invalid grid: start or end position is blocked");
  }

  const paths = [];
  const m = grid.length;
  const n = grid[0].length;

  // TODO: Implement the recursive path finding algorithm
  // Hint: Use a helper function to perform the recursion
  // Hint: Consider using backtracking to explore all possible paths

  return paths;
}

module.exports = findAllPaths;
