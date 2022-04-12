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
    var curr_sum1 = arr[1]-arr[0];
    var curr_sum = 0;
    console.log(curr_sum);
    for (var i = 1; i < arr.length; i++) {
        if ((arr[i] - arr[i - 1]) > 0) {
            curr_sum = curr_sum + (arr[i]-arr[i-1]);
            curr_sum1 = Math.max(curr_sum, curr_sum1);
            console.log("if--" + curr_sum);
        }
        else {
            curr_sum1 = Math.max(curr_sum, curr_sum1);
            curr_sum = 0;
            console.log("else--" + curr_sum);
        }
        
        console.log("updated--" + curr_sum1);
    }
    return curr_sum1
}
var x = maxDiff([4, 3, 10, 11, 9, 1, 6])
console.log(x);