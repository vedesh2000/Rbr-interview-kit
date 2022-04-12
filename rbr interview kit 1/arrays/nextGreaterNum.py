from json.encoder import INFINITY
def next(val):
    res = [int(x) for x in str(val)]
    n = len(res)
    x = 0
    ans =""
    idx = 0
    small = INFINITY
    for i in range(n-1,0,-1):
        #print(i)
        if(res[i]>res[i-1]):
            x , idx= min(res[i:]) , i-1
            break
    minpos = res.index(min(res[idx+1 :]))
    #swapping next min element
    res[idx] , res[minpos] = res[minpos] , res[idx]
    res[idx+1:] = sorted(res[idx+1 :])
    for i in res:
        ans+=str(i)
    
    return int(ans)
print(next(int(218765)))