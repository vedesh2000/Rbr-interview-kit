def swap(a,b):
    return b ,a
def wave(arr):
    n = len(arr)
    if n == 1:
        return arr
    elif n==0:
        return "Empty array"
    
    for i in range(0,len(arr)-1,2):
        #print(arr[i])
        if(i>0 and i<n-1):
            if(arr[i]>arr[i-1] and arr[i] < arr[i+1]):
                arr[i] , arr[i+1] = swap(arr[i] , arr[i+1])
            elif(arr[i]<arr[i-1] and arr[i] > arr[i+1]):
                arr[i] , arr[i-1] = swap(arr[i] , arr[i-1])
        elif(i==0):
            
            if(arr[i] < arr[i+1]):
                arr[i] ,arr[i+1] = swap(arr[i] , arr[i+1])
        elif(i==n-1):
            
            if(arr[i]<arr[i-1]):
                arr[i],arr[i-1] = swap(arr[i],arr[i-1])
    return arr

print(wave([20,8,10,6,4,2]))