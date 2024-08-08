#include <bits/stdc++.h>

using namespace std;

int main()
{
  int N = 57; // 111001
  int idx = 0;
  if (N & (1 << idx))
  {
    cout << "출력됨!" << '\n';
  }

  idx = 1;
  if (N & (1 << idx))
  {
    cout << "출력안됨!";
  }
  return 0;
}