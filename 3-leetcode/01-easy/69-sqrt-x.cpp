class Solution {
  public:
    int mySqrt(int x) {
    if (x == 0) return 0;
    long long low = 1, high = x, ans = 0;
    while(low <= high){
      long long mid = (low + high) / 2;
      if (mid * mid == x) return mid;
      else if (mid * mid > x) high = mid - 1;
      else {
        low = mid + 1;
        ans = mid;
      }
    }
    return ans;
  }
};
