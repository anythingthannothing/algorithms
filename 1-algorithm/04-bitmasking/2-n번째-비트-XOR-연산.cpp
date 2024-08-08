#include <bits/stdc++.h>

using namespace std;

int main()
{
  int N = 57; // 111001

  // 두 번째 비트를 XOR(토글)하기
  int idx = 1;
  N ^= (1 << idx);   // 기대값: 111011
  cout << N << '\n'; // 출력값 59(111011)

  // 여섯 번째 비트를 XOR(토글)하기
  idx = 5;
  N ^= (1 << idx);   // 기대값: 011011
  cout << N << '\n'; // 출력값 27(011011)

  return 0;
}