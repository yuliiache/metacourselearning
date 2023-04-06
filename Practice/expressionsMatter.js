function expressionMatter(a, b, c) {
    let result = 0;
    let arrResult = [];

    let equasion1 = a * (b + c);
    let equasion2 = a * b * c;
    let equasion3 = a + b * c;
    let equasion4 = (a + b) * c;

    arrResult.push(equasion1, equasion2, equasion3, equasion4);
    result = Math.max.apply(null, arrResult);

    return result;
}

console.log((expressionMatter(3, 5, 7)))