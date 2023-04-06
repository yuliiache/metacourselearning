function count (string) {
    let result = {};
    for (let i = 0; i < string.length; i++){
        updateObj(result, string[i])
    }
    return result;
}


function updateObj (obj, letter) {
    if (letter in obj) {
        obj[letter] += 1
    } else {
        obj[letter] = 1
    }
}

console.log(count("oelrkhgvwlerntvo;weijlkhqert"))