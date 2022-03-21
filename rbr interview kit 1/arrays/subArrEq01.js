eq01SubArr = (arr) => {
    var n = arr.length;
    var cur_sum = null;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0)
        arr[i] = -1;        
    }
    let start = 0;
    let end = -1;
    let hashMap = new Map();
    for (let i = 0; i < n; i++) {
        cur_sum = cur_sum + arr[i];
        //check whether cur_sum - sum = 0, if 0 it means
        //the sub array is starting from index 0- so stop
        if (cur_sum === null) {
            console.log("init");
            start = 0;
            end = i;
            break;
        }
        //if hashMap already has the value, means we already
        // have subarray with the sum - so stop
        if (hashMap.has(cur_sum)) {
            start = hashMap.get(cur_sum) + 1;
            end = i;
            break;
        }
        //if value is not present then add to hashmap
        hashMap.set(cur_sum, i);

    }
    if (end == -1) {
        console.log("No subarray with given sum exists");
    }
    else {
        console.log("Sum found between indexes "
                        + start + " to " + end);
    }
    console.log(arr);
} 
var x = eq01SubArr([1,1,1,0,1,0,0,0,1,1,1,0])
console.log(x);