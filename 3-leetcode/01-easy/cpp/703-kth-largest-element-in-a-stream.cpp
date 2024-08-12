#include <bits/stdc++.h>

using namespace std;

class KthLargest
{
private:
  priority_queue<int, vector<int>, greater<int>> minHeap;
  int k;

public:
  KthLargest(int k, vector<int> &nums)
  {
    this->k = k;

    for (int num : nums)
    {
      minHeap.push(num);
      if (minHeap.size() > k)
      {
        minHeap.pop();
      }
    }
  }

  int add(int val)
  {
    if (minHeap.size() < k || minHeap.top() < val)
    {
      minHeap.push(val);
      if (minHeap.size() > k)
      {
        minHeap.pop();
      }
    }
    return minHeap.top();
  }
};

// class KthLargest
// {
// public:
//   vector<int> stream;
//   int k;

//   KthLargest(int k, vector<int> &nums)
//   {
//     this->k = k;
//     for (int num : nums)
//     {
//       stream.push_back(num);
//     }
//     sort(stream.begin(), stream.end(), compare);
//   }

//   int add(int val)
//   {
//     int index = getIndex(val);
//     stream.insert(stream.begin() + index, val);
//     return stream[stream.size() - k];
//   }

// private:
//   int getIndex(int val)
//   {
//     int left = 0;
//     int right = stream.size() - 1;
//     while (left <= right)
//     {
//       int mid = left + (right - left) / 2;
//       int midValue = stream[mid];
//       if (midValue == val)
//         return mid;
//       if (midValue > val)
//       {
//         right = mid - 1;
//       }
//       else
//       {
//         left = mid + 1;
//       }
//     }
//     return left;
//   }

//   static bool compare(int a, int b)
//   {
//     return a < b;
//   }
// };