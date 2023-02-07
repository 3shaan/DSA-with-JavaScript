const arr = [-7, 3, 1, 20, 7, 45, -2, 44, 5];


// ascending order array sort

function insertion() {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = temp;
  }
}

insertion();
console.log(arr);


// descending order array sort
const arr2 = [-7, 3, 1, 20, 7, 45, -2, 44, 5];

function insertion2() {
    for (let i = 1; i < arr2.length; i++){
        let temp = arr2[i];
        let j = i - 1;
        while (j >= 0 && arr2[j] < temp) {
            arr2[j + 1] = arr2[j]
            j = j - 1
        }
        arr2[j + 1] = temp;
    }
}
insertion2();
console.log(arr2);

// its nested loop , thats why its an O(n^2);