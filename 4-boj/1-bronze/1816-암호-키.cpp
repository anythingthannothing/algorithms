#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n = 0;
    cin >> n;

    long cur = 0;

    while (n-- > 0)
    {
        cin >> cur;

        bool flag = true;

        for (int i = 2; i <= 1000000; i++)
        {
            if (cur % i == 0)
            {
                flag = false;
                cout << "NO" << '\n';
                break;
            }
        }

        if (flag)
        {
            cout << "YES" << '\n';
        }
    }

    return 0;
}