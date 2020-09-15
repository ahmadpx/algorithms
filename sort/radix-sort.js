/**
 * radix sort
 * @param {Array} arr
 * @return {Array} sorted array
 */
function radixSort(arr) {
  /**
   * 10 buckets
   * loop over every element add it in the right bucket
   * get them out from the bucket again
   * add them again, remove them again and so on
   * break case is how many digits we have
   * buckets are first in first out
   */

  console.log("before =>", arr);

  let maxDigits = Infinity;
  let digitIndex = 1;

  while (digitIndex <= maxDigits) {
    maxDigits = 0; // so we can work in the loop till we get the correct max digit
    let buckets = Array(10)
      .fill(null)
      .map(() => []);

    for (let i = 0; i < arr.length; i++) {
      const n = arr[i];
      const nAsString = `${n}`;
      const digit = nAsString[nAsString.length - digitIndex]
        ? Number(nAsString[nAsString.length - digitIndex])
        : 0;

      if (nAsString.length > maxDigits) {
        maxDigits = nAsString.length;
      }

      buckets[digit].push(n);
    }

    arr = buckets.reduce((acc, bucket) => [...acc, ...bucket], []);
    ++digitIndex;
  }

  return arr;
}

console.log(
  "after =>",
  radixSort(
    Array(5)
      .fill(null)
      .map(() => Math.ceil(Math.random() * 100))
  )
);
