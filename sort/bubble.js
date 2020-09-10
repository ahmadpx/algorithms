/**
 * bubble sort
 *
 * @description
 * start from the beginning till the end of the array
 * and keep swapping the element with the one after
 * till you face a bigger one, skip the swap then
 * move to the next item in the array till you reach the end of the array
 * once you have the last element of the array is the largest one then
 * you can start again from the beginning the next iteration but not till
 * the end but till the last un sorted element
 *
 * one more optimization is to check if the array is already sorted by
 * having a swapped indicator because if there are no swaps happen through one
 * iteration this means there is nothing to sort any more and you can break
 *
 * [2, 1, 7, 4]
 * [1, 2, 7, 4]
 * [1, 2, 4, 7]
 * [1, 2, 4, 7]
 *
 * @param {Array} arr
 * @return {Array} sorted array
 */
function bubbleSort(arr) {
  let curr = 0;
  let remaining = arr.length;
  let swapped = false;
  const swap = (index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  while (remaining > 0) {
    if (arr[curr] > arr[curr + 1]) {
      swap(curr, ++curr);
      swapped = true;
    } else {
      ++curr;
    }

    console.log(arr);

    if (curr >= remaining - 1) {
      curr = 0;
      --remaining;
      if (!swapped) break;
      swapped = false;
      console.log("ONE ITERATION");
    }
  }

  return arr;
}

console.log(bubbleSort([23, 54, 1, 34, 7, 8, 5, 6, 9, 9]));
