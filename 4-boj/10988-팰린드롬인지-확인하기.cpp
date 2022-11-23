#include <bits/stdc++.h>

using namespace std;

string str, temp;

// int main()
// {
//   ios_base::sync_with_stdio(false);
//   cin.tie(NULL);
//   cout.tie(NULL);

//   cin >> str;

//   int start = 0;
//   int end = str.length() - 1;

//   while (end > start)
//   {
//     if (str.at(start) != str.at(end))
//     {
//       cout << 0;
//       return 0;
//     }
//     start++;
//     end--;
//   }
//   cout << 1;
//   return 0;
// }

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> str;
  string temp = str;
  reverse(str.begin(), str.end());
  if (str == temp)
    cout << 1;
  else
    cout << 0;
  return 0;
}