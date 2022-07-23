function bubbleSort(arr) {
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwapped = true;
            }
        }
        if (isSwapped === false) break;
    }
    return arr;
}