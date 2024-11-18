class Solution {
  List<int> decrypt(List<int> code, int k) {
    List<int> res = List.generate(code.length, (_) => 0);

    if (k == 0) {
      return res;
    }

    int sum = 0;
    int start = k > 0 ? 1 : code.length + k;
    int end = k > 0 ? k : code.length - 1;

    for (int i = start; i <= end; i++) {
      sum += code[i];
    }

    for (int i = 0; i < code.length; i++) {
      res[i] = sum;
      sum -= code[start % code.length];
      sum += code[(end + 1) % code.length];
      start++;
      end++;
    }

    return res;
  }
}
