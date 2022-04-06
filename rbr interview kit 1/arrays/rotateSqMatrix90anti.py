# Reversing a list using reversed()
def Reverse(lst):
	return [ele for ele in reversed(lst)]
def transpose(arr , R, C):
    for i in range(0, R):
        for j in range(i , C):
            arr[i][j] , arr[j][i] = arr[j][i] , arr[i][j]
    return arr
    
def reversecols(arr):
    for i in range(0, len(arr)):
        arr[i] = Reverse(arr[i])
        print(arr[i])
    return arr


def rotate(arr, R,C):
    for i in range(0, len(arr)):
        arr[i] = Reverse(arr[i])
    arr = transpose(arr , R , C)
    return arr
#driver code
k = 1

R = int(input("Enter the number of rows:"))
C = int(input("Enter the number of columns:"))
  
# Initialize matrix
matrix = []
print("Enter the entries rowwise:")
  
# For user input
for i in range(R):          # A for loop for row entries
    a =[]
    for j in range(C):      # A for loop for column entries
         a.append(k)
         k+=1
    matrix.append(a)
  
# For printing the matrix
def printMatrix(matrix):
    for i in range(R):
        for j in range(C):
            print(matrix[i][j], end = " ")
        print()
printMatrix(rotate(matrix , R, C))