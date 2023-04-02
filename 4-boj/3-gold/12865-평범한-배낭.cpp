#include <bits/stdc++.h>

using namespace std;

int n, k, w, v, a[100001];

int main()
{
    cin >> n >> k;

    for (int i = 0; i < n; i++)
    {
        cin >> w >> v;
        for (int j = k; j >= w; j--)
        {
            a[j] = max(a[j - w] + v, a[j]);
        }
    }

    cout << a[k];

    return 0;
}