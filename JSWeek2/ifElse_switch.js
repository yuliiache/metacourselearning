var age = 555
if (age >= 65 && age < 120) {
    console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} else if (age < 18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical")
}


var day = "Mon"
switch(day) {
    case 'Mon':
        console.log("Swim");
        break;
    case 'Tue':
        console.log("Draw");
        break;
    case 'Wed':
        console.log("Sing");
        break;
    case 'Thu':
        console.log("Danse");
        break;
    case 'Fri':
        console.log("Yoga");
        break;
    case 'Sat':
        console.log("Travel");
        break;
    case 'Sun':
        console.log("Relax");
        break;
    default:
        console.log('There is no such day');
        break;
}
var result;
console.log(result);
result = 7;
function addTwo(a,b) {
    return a + b
}
console.log(addTwo(5,"10"))
var cat = {}
cat.sound = "meow"
var catSound = "purr"
console.log(cat.sound)