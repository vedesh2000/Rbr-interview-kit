def rearrange(arr):
    n = len(arr)
# '''
# in order to store two values in one number and later retriving those two numbers
# a = a+b*n
#     a%n = a
#     a/n = b
# '''
    for i in range(0 , n):
        arr[i] = arr[i]+(arr[arr[i]]%n)*n
    for i in range(0 , n):
        # print(i)
        arr[i] = arr[i]//n
    return arr
print(rearrange([3,1,0,2,4]))