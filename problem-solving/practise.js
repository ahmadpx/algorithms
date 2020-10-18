function bomberMan(n, grid) {
  // 0  3
  // 2  5
  // 4  7
  if (n < 2) return grid;
  let currentBombs = {};
  const isBomb = (row, col) => grid[row][col] === "O";
  const detonate = ([row, col]) => {
    grid[row][col] = ".";
    if (col > 0) grid[row][col - 1] = ".";
    if (col < grid[0].length - 1) grid[row][col + 1] = ".";
    if (row < grid.length - 1) grid[row + 1][col] = ".";
    if (row > 0) grid[row - 1][col] = ".";
  };
  const plant = () => {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        grid[row][col] = "O";
      }
    }
  };
  const getCurrentPlantedBombs = (plant = false) => {
    let newBombs = {};
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        // if one of the current bombs detonate && add it and its surroundings to blast area
        // if it's not in one of the blast areas plant
        if (isBomb(row, col)) {
          newBombs[`${row}-${col}`] = [row, col];
        }
        if (plant) grid[row][col] = "O";
      }
    }
    return newBombs;
  };

  currentBombs = getCurrentPlantedBombs(true);

  let seconds = 3;
  while (seconds <= n) {
    Object.values(currentBombs).forEach(detonate);
    currentBombs = getCurrentPlantedBombs(seconds + 1 <= n);
    seconds = seconds + 2;
  }

  grid.forEach((r) => console.log(JSON.stringify(r)));

  return grid;
}

console.log(
  bomberMan(5, [
    [".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "O", ".", "O", "."],
    [".", ".", ".", ".", "O", ".", "."],
    [".", ".", "O", ".", ".", ".", "."],
    ["O", "O", ".", ".", ".", "O", "O"],
    ["O", "O", ".", "O", ".", ".", "."],
  ]).reduce((acc, curr) => acc + curr.join(""), "") ===
    [
      [".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", "O", ".", "O", "."],
      [".", ".", ".", "O", "O", ".", "."],
      [".", ".", "O", "O", "O", "O", "."],
      ["O", "O", "O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O", "O", "O"],
    ].reduce((acc, curr) => acc + curr.join(""), "")
);
