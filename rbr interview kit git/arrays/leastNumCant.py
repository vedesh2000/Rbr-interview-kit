def least_Num(arr):
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


print(least_Num([4,13,2,3,1]))