// https://www.hackerrank.com/challenges/non-divisible-subset/problem
// Explanation: https://medium.com/@mrunankmistry52/non-divisible-subset-problem-comprehensive-explanation-c878a752f057

/**
 * return the length of the max possible subset of the list which
 * will have all the possible permutations between the summation of any
 * two number will not be divisible by k
 * @param {Number} k
 * @param {Number[]} set
 * @return {Number} length of the max subset
 */
function nonDivisibleSubset(k, set) {
  let ans;
  let count = Array(k).fill(0);
  count = set.reduce((acc, n) => {
    const mod = n % k;
    acc[mod] = acc[mod] + 1 || 1;
    return acc;
  }, count);

  ans = Math.min(count[0], 1);

  if (k % 2 === 0) {
    ans += Math.min(count[Math.floor(k / 2)], 1);
  }

  for (let i = 1; i < Math.floor(k / 2) + 1; i++) {
    if (i !== k - i) {
      ans += Math.max(count[i], count[k - i]);
    }
  }

  return ans;
}

console.log(nonDivisibleSubset(3, [1, 7, 2, 4])); // 3

console.log(
  nonDivisibleSubset(7, [
    278,
    576,
    496,
    727,
    410,
    124,
    338,
    149,
    209,
    702,
    282,
    718,
    771,
    575,
    436,
  ])
); // 11
