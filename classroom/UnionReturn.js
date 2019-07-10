var findAddress = function (name) {
    var addressMap = {
        tom: 'address A',
        joe: 'address B'
    };
    return addressMap[name];
};
console.log(findAddress('tom'));
console.log(findAddress('kevin'));
