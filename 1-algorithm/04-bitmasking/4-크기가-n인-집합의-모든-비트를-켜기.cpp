#include <bits/stdc++.h>

using namespace std;

int main()
{
  int n = 5;                    // 100000
  cout << (1 << n) - 1 << '\n'; // 출력값: 11111

  n = 8;                        // 100000000
  cout << (1 << 8) - 1 << '\n'; // 출력값: 11111111

  return 0;
}