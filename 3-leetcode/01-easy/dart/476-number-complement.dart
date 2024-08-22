class Solution {
  int findComplement(int num) {
    final int mask = (1 << num.bitLength) - 1;
    return num ^ mask;
  }
}
