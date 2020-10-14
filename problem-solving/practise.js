// https://www.hackerrank.com/challenges/queens-attack-2/problem

/**
 * queen attack
 * is a chess board having one queen can attack all surrounding squares
 * from its position to all directions and diagonal squares except obstacles
 * @param {Number} n chessboard squares number row/col
 * @param {Number} k number of obstacles
 * @param {Number} r_q queen row position
 * @param {Number} c_q queen col position
 * @param {Array<Array<Number>>} obstacles
 * @return {Number} number of squares a queen can attack
 */
function queensAttack(n, k, r_q, c_q, obstacles = []) {
  const isLeftSquare = (row, col) => row === r_q && col < c_q;
  const isRightSquare = (row, col) => row === r_q && col > c_q;
  const isUpSquare = (row, col) => col === c_q && row > r_q;
  const isDownSquare = (row, col) => col === c_q && row < r_q;
  const isDownRightSquare = (row, col) =>
    r_q - row > 0 && col - c_q > 0 && r_q - row === col - c_q;
  const isUpLeftSquare = (row, col) =>
    row - r_q > 0 && c_q - col > 0 && row - r_q === c_q - col;
  const isDownLeftSquare = (row, col) =>
    r_q - row > 0 && c_q - col > 0 && r_q - row === c_q - col;
  const isUpRightSquare = (row, col) =>
    row - r_q > 0 && col - c_q > 0 && row - r_q === col - c_q;
  const visitedObstacles = {};

  let attackedSquares = 0;

  const obstaclesMap = obstacles.reduce((acc, [row, col]) => {
    acc[`${row}-${col}`] = true;
    return acc;
  }, {});
  const isObstacle = (row, col) => !!obstaclesMap[`${row}-${col}`];
  const chessboard = [];

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      if (isObstacle(row, col)) {
        chessboard[row][col] = "OBSTACLE";
      } else {
        chessboard[row][col] = "ATTACK_SQUARE";
      }
    }
  }
    console.log(chessboard);

  // // directions
  // const rightSquares = n - c_q;
  // const leftSquares = c_q - 1;
  // const upSquares = n - r_q;
  // const downSquares = r_q - 1;
  // // diagonals
  // const downLeftSquares = Math.min(r_q - 1, c_q - 1);
  // const downRightSquares = Math.min(r_q - 1, n - c_q);
  // const upLeftSquares = Math.min(n - r_q, c_q - 1);
  // const upRightSquares = Math.min(n - r_q, n - c_q);
  //
  // attackedSquares += rightSquares + leftSquares + upSquares + downSquares;
  // attackedSquares +=
  //   downLeftSquares + downRightSquares + upLeftSquares + upRightSquares;
  //
  // obstacles.forEach(([row, col]) => {
  //   if (visitedObstacles[`${row}-${col}`]) return;
  //
  //   if (isUpSquare(row, col)) {
  //     console.log(`isUpSquare(${row}, ${col})`);
  //     for (let i = row; i <= n; i++) {
  //       visitedObstacles[`${i}-${col}`] = true;
  //     }
  //     attackedSquares -= n - row + 1;
  //     return;
  //   }
  //   if (isDownSquare(row, col)) {
  //     console.log(`isDownSquare(${row}, ${col})`);
  //     for (let i = row; i > 0; i--) {
  //       visitedObstacles[`${i}-${col}`] = true;
  //     }
  //     attackedSquares -= row;
  //     return;
  //   }
  //   if (isRightSquare(row, col)) {
  //     console.log(`isRightSquare(${row}, ${col})`);
  //     for (let i = col; i <= n; i++) {
  //       visitedObstacles[`${row}-${i}`] = true;
  //     }
  //     attackedSquares -= n - col + 1;
  //     return;
  //   }
  //   if (isLeftSquare(row, col)) {
  //     console.log(`isLeftSquare(${row}, ${col})`);
  //     for (let i = col; i > 0; i--) {
  //       visitedObstacles[`${row}-${i}`] = true;
  //     }
  //     attackedSquares -= col;
  //     return;
  //   }
  //   if (isDownLeftSquare(row, col)) {
  //     console.log(`isDownLeftSquare(${row}, ${col})`);
  //     for (let i = row, j = col; i > 0 && j > 0; i-- && j--) {
  //       visitedObstacles[`${i}-${j}`] = true;
  //     }
  //     attackedSquares -= Math.min(row, col);
  //     return;
  //   }
  //   if (isUpLeftSquare(row, col)) {
  //     console.log(`isUpLeftSquare(${row}, ${col})`);
  //     for (let i = row, j = col; i <= n && j > 0; i++ && j--) {
  //       visitedObstacles[`${i}-${j}`] = true;
  //     }
  //     attackedSquares -= Math.min(n - row + 1, col);
  //     return;
  //   }
  //   if (isUpRightSquare(row, col)) {
  //     console.log(`isUpRightSquare(${row}, ${col})`);
  //     for (let i = row, j = col; i <= n && j <= n; i++ && j++) {
  //       visitedObstacles[`${i}-${j}`] = true;
  //     }
  //     attackedSquares -= Math.min(n - row + 1, n - col + 1);
  //     return;
  //   }
  //   if (isDownRightSquare(row, col)) {
  //     console.log(`isDownRightSquare(${row}, ${col})`);
  //     for (let i = row, j = col; i > 0 && j <= n; i-- && j++) {
  //       visitedObstacles[`${i}-${j}`] = true;
  //     }
  //     attackedSquares -= Math.min(row, n - col + 1);
  //     return;
  //   }
  // });
  //
  // return attackedSquares;
}

console.log(queensAttack(4, 0, 4, 4)); // 9
console.log(
  queensAttack(5, 3, 4, 3, [
    [5, 5],
    [4, 2],
    [2, 3],
    [6, 5],
    [6, 1],
    [1, 3],
  ])
); // 10
console.log(queensAttack(1, 0, 1, 1)); // 0

console.log(
  queensAttack(100, 100, 54, 30, [
    [48, 36],
    [38, 46],
    [60, 24],
    [70, 14],
    [54, 36],
    [54, 24],
    [60, 30],
    [48, 30],
    [71, 50],
    [14, 97],
    [47, 31],
    [29, 68],
    [90, 10],
    [36, 85],
    [63, 24],
    [32, 13],
    [64, 57],
    [45, 57],
    [86, 19],
    [43, 86],
    [68, 72],
    [29, 25],
    [48, 59],
    [38, 78],
    [45, 16],
    [40, 92],
    [76, 85],
    [40, 10],
    [65, 16],
    [71, 18],
    [90, 40],
    [65, 45],
    [10, 37],
    [19, 82],
    [42, 56],
    [46, 60],
    [94, 14],
    [34, 36],
    [95, 49],
    [78, 67],
    [86, 23],
    [28, 12],
    [95, 57],
    [38, 19],
    [61, 49],
    [67, 42],
    [28, 25],
    [38, 28],
    [91, 20],
    [90, 86],
    [81, 19],
    [18, 43],
    [29, 69],
    [36, 20],
    [72, 75],
    [39, 50],
    [17, 92],
    [48, 25],
    [20, 79],
    [82, 57],
    [58, 50],
    [94, 70],
    [17, 19],
    [73, 20],
    [45, 12],
    [19, 89],
    [45, 12],
    [59, 74],
    [63, 71],
    [32, 23],
    [67, 85],
    [24, 25],
    [18, 61],
    [97, 50],
    [70, 37],
    [30, 10],
    [39, 90],
    [75, 58],
    [58, 34],
    [47, 62],
    [28, 28],
    [79, 34],
    [73, 80],
    [93, 36],
    [25, 45],
    [48, 75],
    [42, 13],
    [18, 69],
    [35, 21],
    [18, 87],
    [57, 19],
    [26, 92],
    [94, 34],
    [84, 48],
    [61, 95],
    [62, 89],
    [59, 74],
    [50, 40],
    [36, 37],
    [95, 62],
  ])
);
