odd = (arr) => {
    var x = arr.reduce((acc , curr) => {
        acc = acc ^ curr;
        return acc;
    })
    console.log(x);
}
odd([1,2,3,2,1]);