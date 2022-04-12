var nearToZero = function (arr) {
    arr.sort(function(a,b) { return a - b; });
    var min = arr[0] + arr[arr.length-1];
    var i = 0;
    var j = arr.length - 1;
    while (i<=j) {
        if(Math.abs((arr[j-1]+arr[i])) < min ){
            j--;
            min = Math.min(Math.abs(min) , Math.abs(arr[i] + arr[j]));
            //console.log("if--" , min);
        }
        else{
            i++;
            min = Math.min(Math.abs(min) , Math.abs(arr[i] + arr[j]));
            //console.log("else--" , min);
        }
    }
    return min;
}

var x = nearToZero([-2,9,6,1,3,-5]);
console.log(x);