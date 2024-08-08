function linearSearch(n, arr) {
    for (let i = 0, m = arr.length; i < m; i++) {
      if (arr[i] === n) return i;
    }
    return -1;
  }