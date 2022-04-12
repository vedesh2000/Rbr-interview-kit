'''In this task, we are going to find product of all elements in an array except some index element
without using division operator'''
def prod(arr , i):
    n = len(arr)
    left = [1]*(n-1)
    left.append(arr[0])
    right = [1]*n
    right[len(arr)-1] = arr[len(arr)-1]
    for i in range(1, len(arr)):
        left[i] = left[i-1]*arr[i]
    for i in range(len(arr)-2,0,-1):
        #print(i)
        right[i] = right[i+1]*arr[i]
    if(i == len(arr)-1):
        return left[len(arr)-2]
    elif(i == 0):
        return right[1]
    else:
        return (left[i-1] * right[i+1])
print(prod([1,2,3,4] , 2))