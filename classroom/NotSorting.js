function sort(arr) {
    return arr.sort(function (n1, n2) { return n2 - n1; });
}
console.log(sort([10, 1, 2, 15, 4]));
