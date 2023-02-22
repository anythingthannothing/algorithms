#include <bits/stdc++.h>

using namespace std;

int main()
{
  int N = 57; // 111001
  // 세 번째 비트를 끄기
  int idx = 3;
  N &= ~(1 << idx);  // 기대값: 110001
  cout << N << '\n'; // 출력값: 110001 -> 49

  // 0번 째 비트를 끄기
  idx = 0; // 기대값: 110000
  N &= ~(1 << idx);
  cout << N << '\n'; // 출력값: 48(110000)

  return 0;
}