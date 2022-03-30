#'cool' technique to rotate an array
def reverse(arr):
    return arr[::-1]
def rotated(arr , d):
    arr[:d] = reverse(arr[:d])
    print(arr)
    arr[d:] = reverse(arr[d:])
    print(arr)
    arr = reverse(arr)
    print(arr)
rotated([1,2,3,4,5,6,7,8] , 3)


