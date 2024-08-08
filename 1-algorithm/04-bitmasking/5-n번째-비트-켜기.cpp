#include <bits/stdc++.h>

using namespace std;

int main()
{
  int N = 56;                 // 111000
  int idx = 0;                // 기대값: 1
  cout << (1 << idx) << '\n'; // 출력값: 1

  N |= (1 << idx);   // 111001
  cout << N << '\n'; // 출력값 57 -> 111001

  return 0;
}