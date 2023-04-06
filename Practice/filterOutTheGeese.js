function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    let result = [];

    birds.forEach((element) => {
        if (!geese.includes(element)) {
            result.push(element)
        }
    })

    return result;
};