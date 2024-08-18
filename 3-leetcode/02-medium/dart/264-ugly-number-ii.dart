class Solution {
  int nthUglyNumber(int n) {
    List<int> uglyNumbers = List.filled(n, 0);
    uglyNumbers[0] = 1;

    int index2 = 0, index3 = 0, index5 = 0;
    int next2 = 2, next3 = 3, next5 = 5;

    for (int i = 1; i < n; i++) {
      int nextUglyNumber = min(next2, min(next3, next5));
      uglyNumbers[i] = nextUglyNumber;

      if (nextUglyNumber == next2) {
        index2++;
        next2 = uglyNumbers[index2] * 2;
      }
      if (nextUglyNumber == next3) {
        index3++;
        next3 = uglyNumbers[index3] * 3;
      }
      if (nextUglyNumber == next5) {
        index5++;
        next5 = uglyNumbers[index5] * 5;
      }
    }

    return uglyNumbers[n - 1];
  }
}
