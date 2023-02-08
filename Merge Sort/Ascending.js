function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    };
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        }
        else {
            sortedArr.push(rightArr.shift())
        }
    }
    return[...sortedArr, ...leftArr, ... rightArr]
}

console.log(mergeSort([-7, 3, 1, 20, 7, 45, -2, 44, 5]));

// Another way of sorting

function merge2(arr, f, l, m) {

    let n1 = m - f + 1;
    let n2 = l - m;
    
    const leftArr = [];
    const rightArr = [];

    //copy two array from main array
    for (let i = 0; i < n1; i++){
        leftArr[i]= arr[i]
    }
    for (let j = 0 ; j < n2 ; j++){
        rightArr[j]= arr[m+j]
    }
    
    let i = 0;
    let j = 0;
    let k = f;
    while (i < n1 && j < m + n2) {
        if (leftArr[i] < rightArr[j]) {
            arr[k] = leftArr[i]
            i++
        }
        else {
            arr[k] = rightArr[j]
            j++
        }
    }
    while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
    return arr;
}


function mergeSort2(arr, l, r) {
  if (l >= r) {
    return; //returns recursively
  }
  var m = l + parseInt((r - l) / 2);
  mergeSort2(arr, l, m);
  mergeSort2(arr, m + 1, r);
    merge2(arr, l, r, m);
}

console.log(mergeSort2([-7, 3, 1, 20, 7, 45, -2, 44, 5], 0, 9));