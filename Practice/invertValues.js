function invert(array) {
    let result = [];

    array.forEach((element) => {
        result.push(element * -1)
    })
    return result;
}
console.log(invert([1,2,3,4,5]))