/**
 * insertion sort
 * @description
 *
 * 1 good note:
 * insertion sort is very important if you have almost sorted array
 * this may be very useful if you are updating the array by adding new elements
 * and you keep your array sorted after addition
 *
 * @param {Array} arr
 * @return {Array} sorted arr
 */
function insertionSort(arr) {
  const swap = (n1, n2) => ([arr[n2], arr[n1]] = [arr[n1], arr[n2]]);

  for (let i = 0; i < arr.length; i++) {
    let pointer = i;
    for (let j = i; j >= 0; j--) {
      if (i === j) continue;
      if (arr[pointer] < arr[j]) {
        swap(j, pointer);
      } else {
        break;
      }
      --pointer;
      console.log(`(i = ${arr[i]}`, `, j = ${arr[j]})`, "==>", arr);
    }
  }

  return arr;
}

console.log(insertionSort([23, 54, 1, 34, 7, 8, 5, 6, 9, 9]));
