function combine(input1, input2) {
    var output;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        output = input1 + input2;
    }
    else if (typeof input1 === 'string' && typeof input2 === 'string') {
        output = input1.toString() + " and " + input2.toString();
    }
    return output;
}
var combinedAges = combine(23, 27);
console.log(combinedAges);
var combinedNames = combine('Bekah', 'Joe');
console.log(combinedNames);
