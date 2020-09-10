function naiveSearch(str, target) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (target[0] === str[i]) {
      for (let j = 0; j < target.length; j++) {
        if (target[j] !== str[i + j]) {
          break;
        } else {
          j === target.length - 1 && ++count;
        }
      }
    }
  }

  return count;
}

function naiveSearch2(str, target) {
  return str.split(target).length - 1;
}


console.log(naiveSearch("wowomgzomg", "omg"));
console.log(naiveSearch2("wowomgzomg", "omg"));
