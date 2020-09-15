/**
 * quick sort
 * todo: implement iterative solution as well
 * @param {Array} arr
 * @param {Number} start
 * @param {Number} end
 * @return {Array} sorted array
 */
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, x, y) => ([arr[x], arr[y]] = [arr[y], arr[x]]);

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);

  return swapIndex;
}

console.log(
  quickSort(
    Array(10)
      .fill(null)
      .map(() => Math.ceil(Math.random() * 10))
  )
);
