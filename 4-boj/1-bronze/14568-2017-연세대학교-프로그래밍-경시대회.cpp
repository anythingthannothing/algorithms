#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n = 0, answer = 0;

    cin >> n;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            for (int k = 1; k <= n; k++)
            {
                if (i + j + k < n || i + j + k > n)
                {
                    continue;
                }

                if (i >= j + 2 && k % 2 == 0)
                {
                    answer++;
                }
            }
        }
    }

    cout << answer;

    return 0;
}