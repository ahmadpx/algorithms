function linearSearch(numbers, target) {
  for (let i=0; i < numbers.length; i++) {
    if(target === numbers[i]) {
      return i;
    }
  }
  
  return -1;
}

console.log(linearSearch([4, 5, 7, 64, 5, 2, 4, 7, 8], 7));
