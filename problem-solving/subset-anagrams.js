// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

/**
 * count all possible subset anagrams for a string
 * @param {string} s
 * @return {number} count
 */
function sherlockAndAnagrams(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    let subset = [];
    for (let j = i; j < s.length; j++) {
      subset = [...subset, s[j]].sort().join("");
      map[subset] = ++map[subset] || 1;
    }
  }

  let anagrams = 0;
  Object.values(map).forEach((val) => {
    anagrams += (val * (val - 1)) / 2;
  });

  return anagrams;
}

console.log(sherlockAndAnagrams("a") === 0); // 0
console.log(sherlockAndAnagrams("abba") === 4); // 4
console.log(sherlockAndAnagrams("abcd") === 0); // 0
console.log(sherlockAndAnagrams("ifailuhkqq") === 3); // 3
console.log(sherlockAndAnagrams("kkkk") === 10); // 10
console.log(sherlockAndAnagrams("cdcd") === 5); // 5
