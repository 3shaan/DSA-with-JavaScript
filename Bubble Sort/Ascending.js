// first method ;

function bubbleSort(arr) {
  const  n = arr.length
    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - i -1 ; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j+1] = arr[j]
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([-7, 3, 1, 20, 7, 45, -2, 44, 5]));

// Time complexity for this one is n^2;

//There is another way of bubble sorting which is more efficient and optimized;


function bubbleSort2(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++){
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }
    while (swapped)
    return arr;
}

console.log(bubbleSort2([-7, 3, 1, 20, 7, 45, -2, 44, 5]));

// Another swapped way but two for loop;

function bubbleSort3(arr) {
    let n = arr.length;
    let swapped;
    for (let i = 0; i < n - 1; i++){
        swapped = false;
        for (let j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if (swapped == false) {
            break;
        }
    }

    return arr;
    
}

console.log(bubbleSort3([-7, 3, 1, 20, 7, 45, -2, 44, 5]));