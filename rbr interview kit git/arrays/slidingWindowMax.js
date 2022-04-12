//yet to do
max = (arr,k) => {
    var list = [];
    list[0] = 0;
    for (let i = 1; i < k; i++) {
        while(!(list.length === 0) && arr[i]>=arr[list[list.length-1]])
        removeLast();
        addLast(i)
    }

    console.log(list);
}
max([10,4,2,11,3,15,12,8,7,9,21,14] , 3);