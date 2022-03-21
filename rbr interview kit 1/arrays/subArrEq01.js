eq01SubArr = (arr) => {
    var n = arr.length;
    var sum = 0;
    var idx ;
    var max = 0;
    var cur_sum = null;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0)
        arr[i] = -1;        
    }
    //console.log(arr);
    let hashMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if(hashMap.has(sum) === false){
           // console.log("inserted " ,sum);
            hashMap.set(sum , i);
        }
        else{
            //console.log("else");
            idx = hashMap.get(sum);
            var length  = i - idx;
            if(length > max){
                max = length;
                //console.log(max);
            }
        }

        
    }
   // console.log(hashMap);
    return max;
} 
var x = eq01SubArr([1,1,1,0,1,0,0,0,1,1,1,0])
console.log(x);