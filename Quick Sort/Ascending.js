//* Ascending order
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([-7, 3, 1, 20, 7, 45, -2, 44, 5]));


// Time complexity of Quick sort --
// worst Case - O(n^2);
// Average Case - O(nlogn);