function sameCase(a, b){
    let codeAType = getCharType(a);
    let codeBType = getCharType(b);

    if (codeAType == "notLetter" || codeBType == "notLetter") {
        return -1;
    } else if (codeAType == codeBType) {
        return 1;
    } else if (codeAType !== codeBType) {
        return 0;
    }

}
console.log(sameCase('', 's'))

function getCharType (char) {
    let charCode = char.charCodeAt(0);

    if (charCode > 96 && charCode < 123) {
        return "lowerCase"
    } else if (charCode > 64 && charCode < 91) {
        return "upperCase"
    } else {
        return "notLetter"
    };
}