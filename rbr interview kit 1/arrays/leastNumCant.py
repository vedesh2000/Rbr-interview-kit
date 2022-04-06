def numTriangles(arr):
    arr.sort()
    np = 1
    for i in range(0, len(arr)):
        temp = np
        if np < arr[i]:
            return temp
        else:
            np+=arr[i]
            print(np , arr[i])
        

    return 0


print("Smallest number that is not possible to get is " , numTriangles([4,13,2,3,1]))