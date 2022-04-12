var findPair = function (b, target) {
    let foo = [];
    b.forEach((x) => {
        foo[x] = 1;
    })
    var res = [];
    var i = 0;
    console.log(foo);
    b.forEach((z) => {
        if (foo[target - z] === 1) {
            res[i] = { first: z, second: (target - z) };
            foo[z] = 0;
        }
        console.log(foo);
        i++;
    })
    

    res.forEach((x) => {
        console.log(x.first + " " + x.second);
    });
}
findPair([1, 2, 3, 4, 8, 9, 0], 10);