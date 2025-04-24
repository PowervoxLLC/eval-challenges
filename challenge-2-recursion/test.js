const findAllPaths = require("./solution");

describe("Grid Path Finder", () => {
  test("should find all paths in a simple 2x2 grid", () => {
    const grid = [
      [0, 0],
      [0, 0],
    ];
    const result = findAllPaths(grid);
    expect(result).toHaveLength(2);
    expect(result).toContainEqual([
      [0, 0],
      [0, 1],
      [1, 1],
    ]);
    expect(result).toContainEqual([
      [0, 0],
      [1, 0],
      [1, 1],
    ]);
  });

  test("should find all paths in a 3x3 grid with obstacles", () => {
    const grid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const result = findAllPaths(grid);
    expect(result).toHaveLength(2);
    expect(result).toContainEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
      [2, 2],
    ]);
    expect(result).toContainEqual([
      [0, 0],
      [1, 0],
      [2, 0],
      [2, 1],
      [2, 2],
    ]);
  });

  test("should handle a single path scenario", () => {
    const grid = [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ];
    const result = findAllPaths(grid);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
      [2, 2],
    ]);
  });

  test("should throw error for invalid grid", () => {
    expect(() => findAllPaths(null)).toThrow("Invalid grid");
    expect(() => findAllPaths([])).toThrow("Invalid grid");
    expect(() => findAllPaths([[]])).toThrow("Invalid grid");
  });

  test("should throw error if start or end is blocked", () => {
    const blockedStart = [
      [1, 0],
      [0, 0],
    ];
    const blockedEnd = [
      [0, 0],
      [0, 1],
    ];
    expect(() => findAllPaths(blockedStart)).toThrow(
      "start or end position is blocked"
    );
    expect(() => findAllPaths(blockedEnd)).toThrow(
      "start or end position is blocked"
    );
  });

  test("should handle larger grids", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    const result = findAllPaths(grid);
    expect(result.length).toBeGreaterThan(0);
    result.forEach((path) => {
      expect(path[0]).toEqual([0, 0]);
      expect(path[path.length - 1]).toEqual([3, 3]);
    });
  });
});
