function bomberMan(n, grid) {
  // 0  3
  // 2  5
  // 4  7
  if (n < 2) return grid;
  let currentBombs = [];
  const isBomb = (row, col) => grid[row][col] === "O";
  const isPlantingTime = (seconds) => seconds % 2 === 0;
  const isBlastingTime = (seconds) => seconds % 2 === 1;
  const detonate = ([row, col]) => {
    grid[row][col] = ".";
    if (col > 0) grid[row][col - 1] = ".";
    if (col < grid[0].length - 1) grid[row][col + 1] = ".";
    if (row < grid.length - 1) grid[row + 1][col] = ".";
    if (row > 0) grid[row - 1][col] = ".";
  };
  const getCurrentPlantedBombs = (plant = false) => {
    let currentBombs = [];
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (isBomb(row, col)) {
          currentBombs.push([row, col]);
        }
        if (plant) grid[row][col] = "O";
      }
    }
    return currentBombs;
  };

  currentBombs = getCurrentPlantedBombs(true);

  let seconds = 3;
  while (seconds <= n) {
    if (isBlastingTime(seconds)) {
      currentBombs.forEach(detonate);
      currentBombs = getCurrentPlantedBombs(
        isPlantingTime(seconds + 1) && seconds + 1 < n
      );
      console.log(currentBombs);
    }
    ++seconds;
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
