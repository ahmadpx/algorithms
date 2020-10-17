// https://www.hackerrank.com/challenges/absolute-permutation/problem

function absolutePermutation(n, k) {
  let result = [];

  if (k === 0) return [...new Array(n + 1).keys()].slice(1);

  if (n % (2 * k) !== 0) return [-1];

  for (let i = 0; i < n; i++) {
    result.push(Math.floor(i / k) % 2 === 0 ? i + k + 1 : i - k + 1);
  }

  return result;
}

console.log(absolutePermutation(2, 1).join("") === [2, 1].join(""));
console.log(absolutePermutation(3, 0).join("") === [1, 2, 3].join(""));
console.log(absolutePermutation(3, 2).join("") === [-1].join(""));
console.log(absolutePermutation(2, 1).join("") === [2, 1].join(""));
console.log(
  absolutePermutation(100, 2).join("") ===
    [
      3,
      4,
      1,
      2,
      7,
      8,
      5,
      6,
      11,
      12,
      9,
      10,
      15,
      16,
      13,
      14,
      19,
      20,
      17,
      18,
      23,
      24,
      21,
      22,
      27,
      28,
      25,
      26,
      31,
      32,
      29,
      30,
      35,
      36,
      33,
      34,
      39,
      40,
      37,
      38,
      43,
      44,
      41,
      42,
      47,
      48,
      45,
      46,
      51,
      52,
      49,
      50,
      55,
      56,
      53,
      54,
      59,
      60,
      57,
      58,
      63,
      64,
      61,
      62,
      67,
      68,
      65,
      66,
      71,
      72,
      69,
      70,
      75,
      76,
      73,
      74,
      79,
      80,
      77,
      78,
      83,
      84,
      81,
      82,
      87,
      88,
      85,
      86,
      91,
      92,
      89,
      90,
      95,
      96,
      93,
      94,
      99,
      100,
      97,
      98,
    ].join("")
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
