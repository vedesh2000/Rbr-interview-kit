var moore = function (arr) {
    var voter_idx = 0;
    var vote =1;
    for (var i = 0; i < arr.length; i++) {

        if (arr[voter_idx] === arr[i]) {
            vote++;
        }
        else {
            vote--;
        }
        if (vote === 0) {
            vote++;
            voter_idx = i;
        }
    }
    if(isMaj(arr , arr[voter_idx])=== -1){
    return "no majority element";}
    return arr[voter_idx]
}
function isMaj(arr , check){
    var count=0;
    arr.forEach(element => {
        if(element == check)
        count=count+1;
    });

    if(count > arr.length/2){
    return check;}
    return -1;
}
var x = moore([2,2,2,1,7]);
console.log(x);