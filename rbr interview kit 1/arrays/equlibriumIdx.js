equilbrium = (arr) => {
 var sum = 0;
 sum =arr.reduce((acc , curr) => acc + curr , 0);
 console.log(sum);
 var i =0;
 var res = 0;
 var temp= sum;
 arr.forEach(element => {
    temp = temp - element;
    console.log(temp);
    if(temp == Math.floor(sum/2)){
        console.log(".if.");
        res = i;
    }
    console.log("....");
    i++;
 });
 return res;
}
var x = equilbrium([10,5,15,3,4,21,2]);
console.log(x);