// // Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize, txt) {
//     var message = "%c" + txt;
//     var style = `color: ${color};`
//     style += `background: ${background};`
//     style += `font-size: ${fontSize};`
//     console.log(style, message)
// }
//
// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//
//     var fontStyle = "color: tomato; font-size: 50px";
//
//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     } else if (reason == "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     } else {
//         console.log(message, style);
//     }
// }
// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
// celebrateStyler('birthday')
//
// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate(color, background, fontSize, txt, reason) {
//     consoleStyler(color, background, fontSize, txt);
//     celebrateStyler(reason);
// }
// styleAndCelebrate ('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions')
// // Call styleAndCelebrate
//
//
//
// function meal(animal) {
//     animal.food = animal.food + 10;
// }
//
// var dog = {
//     food: 10
// };
// meal(dog);
//
// meal(dog);
//
// console.log(dog.food);
//
//
// function two() {
//     return 2;
// }
//
// function one() {
//     return 1;
// }
//
// function calculate(initialValue, incrementValue) {
//     return initialValue() + incrementValue() + incrementValue();
// }
//
// console.log(calculate(two, one));

function myFunc(theObject) {
    theObject.make = "Toyota";
}

const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};

// x gets the value "Honda"
const x = mycar.make;

// // the make property is changed by the function
// myFunc(mycar);
// // y gets the value "Toyota"
// const y = mycar.make;
console.log(mycar.make)