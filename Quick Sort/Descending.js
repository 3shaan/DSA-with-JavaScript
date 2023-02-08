// Descending order

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(right), pivot, ...quickSort(left)];
}

console.log(quickSort([-7, 3, 1, 20, 7, 45, -2, 44, 5, 3]));
