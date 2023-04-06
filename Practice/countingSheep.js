function countSheeps(arrayOfSheep) {
    let numOfSheeps = 0;

    arrayOfSheep.forEach((element) => {
        if (element == true) {
            numOfSheeps += 1
        } else {

        }
    })
    return numOfSheeps;
}
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))