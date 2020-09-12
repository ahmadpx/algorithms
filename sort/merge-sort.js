function mergeSort(arr) {
  if (arr.length === 1) return arr;
  return mergeArrays(divide(arr).reverse().map(mergeSort)).flat(Infinity);
}

function divide(arr) {
  return [
    arr.slice(0, Math.floor(arr.length / 2)),
    arr.slice(Math.floor(arr.length / 2), arr.length),
  ];
}

function mergeArrays(arr1, arr2) {
  !Array.isArray(arr1) && (arr1 = []);
  !Array.isArray(arr2) && (arr2 = []);

  let mergedArray = [];
  let arr1Pointer = 0;
  let arr2Pointer = 0;

  while (arr1Pointer <= arr1.length - 1 || arr2Pointer <= arr2.length - 1) {
    if (arr1[arr1Pointer] <= arr2[arr2Pointer]) {
      mergedArray.push(arr1[arr1Pointer]);
      ++arr1Pointer;
    } else if (arr2[arr2Pointer] < arr1[arr1Pointer]) {
      mergedArray.push(arr2[arr2Pointer]);
      ++arr2Pointer;
    } else if (
      arr1Pointer >= arr1.length - 1 &&
      arr2Pointer <= arr2.length - 1
    ) {
      mergedArray.push(arr2[arr2Pointer]);
      ++arr2Pointer;
    } else if (
      arr2Pointer >= arr2.length - 1 &&
      arr1Pointer <= arr1.length - 1
    ) {
      mergedArray.push(arr1[arr1Pointer]);
      ++arr1Pointer;
    }
  }

  return mergedArray;
}

console.log(mergeSort([6, 5, 4, 3, 2, 1]));
