/**
 * selection sort
 * @description
 *
 * @param {Array} arr
 * @return {Array} sorted arr
 */
function selectionSort(arr) {
  const swap = (n1, n2) => ([arr[n2], arr[n1]] = [arr[n1], arr[n2]]);
  let startPointer = 0;
  let minPointer = 0;
  let i = 0;
  let swapped = false;

  while (startPointer < arr.length) {
    if (arr[i] < arr[minPointer]) {
      minPointer = i;
      swapped = true;
    }

    if (i >= arr.length - 1) {
      if (swapped) {
        swap(minPointer, startPointer);
        swapped = false;
      }
      console.log(arr);
      ++startPointer;
      minPointer = startPointer;
      i = startPointer;
    }

    ++i;
  }

  return arr;
}

console.log(selectionSort([23, 54, 1, 34, 7, 8, 5, 6, 9, 9]));
