// https://www.hackerrank.com/challenges/almost-sorted/problem

function almostSorted(arr) {
  function isSorted(arr) {
    let sorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
      }
    }
    return sorted;
  }

  function swap(arr, i, j) {
    const tempArr = arr.slice();
    [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    return tempArr;
  }

  if (isSorted(arr)) {
    console.log("yes");
    return;
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) break;
  }

  for (var j = arr.length - 1; j > 0; j--) {
    if (arr[j] < arr[j - 1]) break;
  }

  if (isSorted(swap(arr, i, j))) {
    console.log("yes");
    console.log("swap", i + 1, j + 1);
    return;
  }
  if (
    isSorted(
      arr.slice(0, i).concat(arr.slice(i, j + 1).reverse(), arr.slice(j + 1))
    )
  ) {
    console.log("yes");
    console.log("reverse", i + 1, j + 1);
    return;
  }

  console.log("no");
}

almostSorted([1, 5, 4, 3, 2, 6]); // yes reverse 2 5
almostSorted([3, 1, 2]); // no
almostSorted([4, 2]); // yes swap 1 2
almostSorted([1, 2, 3, 4]); // yes
