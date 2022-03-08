#include <iostream>
using namespace std;
int binarySearch(int arr[], int l, int r, int target)
{
    while (l <= r)
    {

        int m = (l + r) / 2;
        if (arr[m] == target)
        {
            return m;
        }
        else if (arr[m] < target)
        {
            l = m + 1;
        }
        else
        {
            r = m - 1;
        }
    }
    return -1;
}
int main()
{
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    int res = binarySearch(arr, 0, n, 5);
    if (res == -1)
    {
        cout << "not found";
    }
    else
    {
        cout << "found at " << res;
    }
    return 0;
}