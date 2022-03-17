//Unique
triplet = (arr, target) => {
arr.sort();
var n = arr.length;
var res;
for(let i = 0; i < arr.length; i++) {
    var left = i+1;
    var right = n-1;
    console.log(i);
    while(left < right){
        var sum = arr[i] + arr[left] + arr[right];
        if (sum === target) {
            
            res = [arr[i] , arr[left] , arr[right]];
            console.log("res ->" , res);
            break;
        }
        else if (sum < target) {
            right--;
        }
        else {
            left++;
        }
    }
    
}
return res;
}
var x = triplet([6,9,1,4,2,7] , 15);
console.log(x);