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
            foo[target - z] = 0;
        }
        i++;
    })
    console.log(foo);

    res.forEach((x) => {
        console.log(x.first + " " + x.second);
    });
}
findPair([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 10);