// https://www.hackerrank.com/challenges/absolute-permutation/problem

function absolutePermutation(n, k) {
  let result = [];
  let visited = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (visited[j]) continue;
      if (Math.abs(i - j) === k) {
        result.push(j);
        visited[j] = true;
        break;
      }
    }
  }

  return result.length === n ? result : [-1];
}

console.log(absolutePermutation(2, 1).join("") === [2, 1].join(""));
console.log(absolutePermutation(3, 0).join("") === [1, 2, 3].join(""));
console.log(absolutePermutation(3, 2).join("") === [-1].join(""));
console.log(absolutePermutation(2, 1).join("") === [2, 1].join(""));
console.log(
  absolutePermutation(10, 5).join("") ===
    [6, 7, 8, 9, 10, 1, 2, 3, 4, 5].join("")
);
console.log(absolutePermutation(7, 5).join("") === [-1].join(""));
console.log(absolutePermutation(2, 1).join("") === [2, 1].join(""));
console.log(absolutePermutation(2, 0).join("") === [1, 2].join(""));
console.log(absolutePermutation(2, 0).join("") === [1, 2].join(""));
console.log(absolutePermutation(1, 0).join("") === [1].join(""));
console.log(
  absolutePermutation(10, 5).join("") ===
    [6, 7, 8, 9, 10, 1, 2, 3, 4, 5].join("")
);
console.log(
  absolutePermutation(10, 0).join("") ===
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].join("")
);
console.log(absolutePermutation(6, 0).join("") === [1, 2, 3, 4, 5, 6].join(""));
