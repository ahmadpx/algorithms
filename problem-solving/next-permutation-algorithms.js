// https://www.hackerrank.com/challenges/bigger-is-greater/problem

function biggerIsGreater(word) {
  let arr = word.split("").map((l) => l.charCodeAt(0));

  let ordered = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      ordered = false;
      break;
    }
  }
  if (ordered) return "no answer";

  let pivot = arr.length - 1;
  for (let i = pivot; i > 0; i--) {
    if (arr[i - 1] < arr[i]) {
      pivot = i - 1;
      break;
    }
  }

  for (let j = arr.length - 1; j > pivot; j--) {
    if (arr[j] > arr[pivot]) {
      arr = swap(arr, j, pivot);
      break;
    }
  }

  arr = arr.slice(0, pivot + 1).concat(arr.slice(pivot + 1).reverse());

  return arr.reduce((str, l) => str + String.fromCharCode(l), "");
}

console.log(biggerIsGreater("ab")); // ba
console.log(biggerIsGreater("bb")); // no answer
console.log(biggerIsGreater("hefg")); // hegf
console.log(biggerIsGreater("dhck")); // dhkc
console.log(biggerIsGreater("dkhc")); // hcdk
