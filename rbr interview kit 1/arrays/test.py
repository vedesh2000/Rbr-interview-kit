def isPalindrome(s):
    x = s[::-1]
    print(x)
    return s == s[::-1]


# Driver code
s = "malayalam"
ans = isPalindrome(s)

if ans:
	print("Yes")
else:
	print("No")