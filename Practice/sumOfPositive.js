// You get an array of numbers, return the sum of all of the positives ones.
//     Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
    let result = 0;

    arr.forEach((element) => {
        if (element > 0){
            result += element
        }
    })
    return result;
}
console.log(positiveSum([]))