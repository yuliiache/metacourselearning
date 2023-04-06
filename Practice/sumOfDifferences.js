function sumOfDifferences(arr) {
    let result = 0;

    let descArr = arr.sort((a,b) => b-a);

    for (let i = 0; i < arr.length - 1; i++) {
        result += (descArr[i] - descArr[i + 1])
    }

    return result;
}
console.log( sumOfDifferences([1, 2, 10]))