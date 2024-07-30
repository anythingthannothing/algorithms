class Solution {
public:
    int digit = 0;
    vector<int> plusOne(vector<int>& digits) {
      int n = digits.size();
      int surplus = 0;
      
      reverse(digits.begin(), digits.end());
      digits[0] += 1;
      
      for (int i = 0; i < n; i++) {
        digit = digits[i] + surplus;
        surplus = 0;
        if (digit > 9) {
          digits[i] = 0;
          surplus = 1;
          continue;
        }
        digits[i] = digit;
      }
      
      if (surplus) {
        digits.push_back(1);
      }
      
      reverse(digits.begin(), digits.end());
      
      return digits;
    }
};
