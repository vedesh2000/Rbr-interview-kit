# importing functools for reduce()
import functools
def trapping(arr):
    total_water = 0
    print(arr)
    n = len(arr)
    left = []
    sum = arr[0]
    diff = []
    right = []
    for i in range(0, n):
        sum = max(arr[i], sum)
        left.append(sum)
    print(left)
    sum = arr[n-1]
    for i in range(n-1, 0, -1):
        sum = max(arr[i], sum)
        right.insert(0, sum)
    print(right)
    for i in range(0, n-1):
        total_water = (min(left[i] , right[i]) - arr[i])
        if total_water >= 0:
            diff.append(total_water)
        else: diff.append(0)
    print(diff)
    return (functools.reduce(lambda a, b: a+b, diff))

print("Answer:  " , trapping([1, 0, 2, 0, 1, 0, 3, 1, 0, 2]))
