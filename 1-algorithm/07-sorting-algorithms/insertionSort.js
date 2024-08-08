function insertionSort(arr) {
    for (let i = 1, len = arr.length; i < len; i++) {
        let temp = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
    return arr;
}