function points(twoPointers, threePointers) {
    return (twoPointers * 2) + (threePointers * 3)
}

console.log(points(38, 8))

function nameString(name){
    var b = "Edabit"
    var result = name + b
    return result
}
console.log(nameString("Mubashir"))

function lessThan100(a, b) {
    var sum = a + b
    if(sum < 100) {
        return true
    }
}
try {
    throw new Error();
    console.log('Square');
} catch(err) {
    console.log('Circle');
}

function squareSum(numbers){
    var result = 0
    numbers.forEach((numbers) => {
        Math.pow(numbers, 2);
    });
    return result
}
console.log(squareSum([1,2,2]))