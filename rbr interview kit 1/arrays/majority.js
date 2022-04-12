//Linear approach where more than half elements are same
var majority = function (arr) {
    var size = arr.length;
    var occ = Math.floor(size / 2) + 1;
    var res = [];
    var k = 0;
    for (var i = 0; i < size - 1; i++) {
        var j = i + occ - 1;
        if (arr[i] === arr[j]) {
            res[k] = arr[i];
            k++;
        }
        
    }
    return res;
}
var ar = [1, 1, 1, 2, 2, 2, 2, 2, 3];
majority(ar).forEach((x) => { console.log(x)});
