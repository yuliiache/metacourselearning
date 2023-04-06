function warnTheSheep(queue) {
    let wolfNum = queue.indexOf('wolf') + 1;
    let sheepNum = queue.length - wolfNum;

    if (queue.length == wolfNum) {
        return `Pls go away and stop eating my sheep`
    } else {
        return `Oi! Sheep number ${sheepNum}! You are about to be eaten by a wolf!`
    }

}
console.log(warnTheSheep(["sheep", "sheep", "wolf"]))
