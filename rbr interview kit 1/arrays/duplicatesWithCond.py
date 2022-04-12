'''for all entries in array provided all entries will be 1<arr[i]<n'''
def duplicates(arr):
    for i in range(0,len(arr)):
        if arr[abs(arr[i])] >= 0:
            arr[abs(arr[i])] *= -1
        else:
            print(abs(arr[i]))
    print(arr)
duplicates([1,2,2,3,4,7,8,7,4,1])
