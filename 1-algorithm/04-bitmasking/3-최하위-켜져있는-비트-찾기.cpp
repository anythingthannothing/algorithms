#include <bits/stdc++.h>

using namespace std;

int main()
{
  int N = 57;          // 111001
  int idx = (N & -N);  // 기대값: 1
  cout << idx << '\n'; // 출력값: 1

  N = 56;              // 111000
  idx = (N & -N);      // 기대값: 8 -> 1000
  cout << idx << '\n'; // 출력값 8 -> 1000

  return 0;
}