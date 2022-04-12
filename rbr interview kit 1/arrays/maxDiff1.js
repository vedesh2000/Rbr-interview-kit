
maxSumSubArray = (arr) => {
    
    curr_sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] > 0) {
            arr[i] = arr[i] + arr[i - 1];
        }
        curr_sum = Math.max(curr_sum, arr[i]);
    }
    return curr_sum;
}
maxDiff = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }
    else if (arr.length === 2) {
        if(arr[1] > arr[0]){
            return (arr[1] - arr[0]);
        }
        else{
            return -1;
        }
    }
    var diff = [];
    for (let i = 1; i < arr.length; i++) {
        diff[i - 1] = arr[i] - arr[i - 1];
    }
    return maxSumSubArray(diff);
}
var x = maxDiff([4, 3, 10, 11, 9, 1, 6])
console.log(x);