#include <bits/stdc++.h>

using namespace std;

int main()
{
    vector<int> v{4, 3, 3, 5, 1, 2, 3};

    v.erase(unique(v.begin(), v.end()), v.end());

    for (int i : v)
    {
        cout << i << " ";
    }
    cout << '\n';

    vector<int> v2{4, 3, 3, 5, 1, 2, 3};

    sort(v2.begin(), v2.end());

    v2.erase(unique(v2.begin(), v2.end()), v2.end());

    for (int i : v2)
    {
        cout << i << " ";
    }
    return 0;
}