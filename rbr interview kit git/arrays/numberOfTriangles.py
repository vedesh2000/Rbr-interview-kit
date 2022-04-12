def numTriangles(arr):
    arr.sort()
    sum = 0
    i = 0
    j = 1
    n = len(arr)
    for i in range(0, n-3):
        k = i+2
        for j in range(i+1, n-2):
            while k<n and arr[i] + arr[j] > arr[k]:
                k+=1
            sum += k-j-1
    return sum
print(numTriangles([8,10,12,6,7,14,50]))