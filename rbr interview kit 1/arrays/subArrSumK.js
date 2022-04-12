subArrPos = (arr, k) => {
    var l = 0;
    var r = 0;
    var sum = 0;
    while (r < arr.length || l < arr.length) {
        if (sum < k) {

            sum += arr[r];
            r++;
        }
        else if (sum > k) {

            sum -= arr[l];
            l++;
        }
        else {
            var res = [];
            var k = 0;
            for (let i = l; i < r; i++) {
                res[k] = arr[i];
                k++;
            }
            return res;
        }
    }
    return "not possible";
}
subArrAll = (arr, sum) => {
    let n = arr.length;
    //cur_sum to keep track of cumulative sum till that point
    let cur_sum = 0;
    let start = 0;
    let end = -1;
    let hashMap = new Map();

    for (let i = 0; i < n; i++) {
        cur_sum = cur_sum + arr[i];
        //check whether cur_sum - sum = 0, if 0 it means
        //the sub array is starting from index 0- so stop
        if (cur_sum - sum == 0) {
            start = 0;
            end = i;
            break;
        }
        //if hashMap already has the value, means we already
        // have subarray with the sum - so stop
        if (hashMap.has(cur_sum - sum)) {
            start = hashMap.get(cur_sum - sum) + 1;
            end = i;
            break;
        }
        //if value is not present then add to hashmap
        hashMap.set(cur_sum, i);

    }
    // if end is -1 : means we have reached end without the sum
    if (end == -1) {
        console.log("No subarray with given sum exists");
    }
    else {
        console.log("Sum found between indexes "
                        + start + " to " + end);
    }
}
var x = subArrPos([10, 3, 4, 7, 1, 3, 2], 18);
var y = subArrAll([10, -3, 4, -7, 1, 3, 2], 0)
console.log(x);