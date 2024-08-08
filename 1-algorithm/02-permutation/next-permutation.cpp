#include <bits/stdc++.h>

using namespace std;

const int LENGTH = 5;
vector<int> v = {1, 2, 3, 4, 5};

void makePermutation(int n, int r, int depth)
{
    if (r == depth)
    {
        for (int i = 0; i < r; i++)
        {
            cout << v[i] << " ";
        }

        cout << '\n';
        return;
    }

    for (int i = depth; i < n; i++)
    {
        swap(v[i], v[depth]);
        makePermutation(n, r, depth + 1);
        swap(v[i], v[depth]);
    }

    return;
}

int main()
{
    int a[LENGTH] = {100, 3, 2, 5, 150};

    // sort를 먼저 해주기
    sort(a, a + LENGTH);

    do
    {
        for (int i : a)
        {
            cout << i << " ";
        }
        cout << '\n';
    } while (next_permutation(a, a + LENGTH));

    sort(a, a + LENGTH);

    // 2개만 뽑는다면? -> 중복된 값이 나옴
    do
    {
        for (int i = 0; i < 2; i++)
        {
            cout << a[i] << " ";
        }

        cout << '\n';
    } while (next_permutation(a, a + LENGTH));

    vector<int> b = {1, 2, 3};

    sort(b.begin(), b.end());

    do
    {
        for (int i : b)
        {
            cout << i << " ";
        }
        cout << '\n';
    } while (next_permutation(b.begin(), b.end()));

    makePermutation(5, 3, 0);

    return 0;
}
