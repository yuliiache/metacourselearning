function points(games) {
    let result = 0;
    let eachGameScore = [];
    let x = 0;
    let y = 0;

    games.forEach((element) => {
        eachGameScore = element.split(':');
        x = parseInt(eachGameScore[0]);
        y = parseInt(eachGameScore[1]);
        result += getSingleGamePoints(x, y);
    });

    return result;
}
function getSingleGamePoints(x, y) {
    let result = 0;

    if (x > y) {
        result = 3
    } else if (x < y) {
        result = 0
    } else if (x == y) {
        result = 1
    }

    return result;
}