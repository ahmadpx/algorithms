function binarySearch(arr, val, index = arr.length) {
  let left = 0;
  let right = arr.length;
  let center = Math.floor((right - left) / 2);
  let possibleVal = arr[center];

  if (possibleVal === val) return Math.floor(index / 2);

  if (center === left && possibleVal !== val) return -1;

  if (val > possibleVal) {
    return binarySearch(arr.slice(center, right), val, index + center);
  } else {
    return binarySearch(arr.slice(left, center), val, index - center);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));

/*

if value in the lower half use index - center
if value in the upper half index + center




*/
