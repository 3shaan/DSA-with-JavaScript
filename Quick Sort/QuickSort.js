//Sorting without recursion

function swap(arr, i , j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

function partition(arr, low, high) {
   
    const pivot = arr[high];
     console.log(pivot);
    let i = low;
    for (let j = low; j < high; j++){
        if (arr[j] < pivot) {
            swap(arr, i, j)
            i++
        }
    }
    swap(arr, i, high)
    return i
}


function quickSort(arr, low = 0, high  = arr.length - 1) {
  
    if (low < high) {
        const pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
    return arr;

}
console.log(quickSort([-7, 3, 1, 20, 7, 45, -2, 44, 5]));