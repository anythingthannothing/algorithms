function selectionSort(arr) {
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) minIndex = j;
        }
        if (i !== minIndex) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}