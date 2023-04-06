var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (var value of dairy) {
        console.log(value)
    }
}
logDairy()

const animal = {

    canJump: true

};
const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (key of Object.keys(bird)) {
        console.log(key, ":", bird[key])
    }
}
birdCan()

function animalCan() {
    for (key in bird) {
        console.log(key, ":", bird[key])
    }
}
animalCan()