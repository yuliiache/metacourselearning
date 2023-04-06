function letterFinder(word, match){
    for (var i = 0; i < word.length; i++){
        if (word[i] == match){
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }

    }
}
// letterFinder('test', 't')


function reverseString (someString){
    var result = ''
    for (var i = someString.length - 1; i >= 0; i--){
        result = result + someString [i]
    }
    //console.log(result)
    return result
}

var testString = "chfbeve"
var reverseTestString = reverseString(testString)
console.log(reverseTestString)



function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
arrayBuilder(1, 2, 3)

function letterFinder(word, letter){
    var arr =[]
    for (var i=0; i< word.length; i++) {
        if (word[i] == letter) {
            arr.push(i)
        }

    }

    console.log(arr)
}


letterFinder('hello', 'l');

function doubleIt(num) {
    var result = num * 2
    return result
}
doubleIt(10).toString()
function objectMaker(val) {
    return {
        prop: val
    }
}

console.log(objectMaker( doubleIt(100) ))

function fiftyThirtyTwenty(ati) {
    var result = {}
    result["Needs"] = ati * 0.5;
    result["Wants"] = ati * 0.3;
    result["Savings"] = ati * 0.2;
    return result
}
console.log(fiftyThirtyTwenty(7500))