maxSumSubArray = (arr) => {
    curr_sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i-1] > 0) {
            arr[i] = arr[i] + arr[i-1];
        }
        curr_sum = Math.max(curr_sum , arr[i]);
    }
    return curr_sum;
} 