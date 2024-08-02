#include <bits/stdc++.h>

using namespace std;

int k = 3;
const int n = 5;
int a[n] = {1, 2, 3, 4, 5};

void print(vector<int> b)
{
    for (int i : b)
        cout << i << " ";
    cout << '\n';
}

void combi(int start, vector<int> b)
{
    if (b.size() == k)
    {
        print(b);
        return;
    }

    for (int i = start; i < n; i++)
    {
        b.push_back(a[i]);
        combi(i + 1, b);
        b.pop_back();
    }
}

int main()
{
    vector<int> b;
    combi(0, b);
    return 0;
}