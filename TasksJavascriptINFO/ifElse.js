let javaScriptName = prompt('What is the "official" name of JavaScript?', "");

if(javaScriptName == "ECMAScript"){
    alert("Right!")
}else{
    alert("You don't know? ECMAScript!");
}

let number = prompt("Input a number here", "");
if(number > 0) {
    alert(1);
} else if (number < 0){
    alert(-1);
} else {
    alert(0);
}
let a = 2;
let b = 5;
let result = (a + b < 4) ? "Below" : "Over";
alert(result)

let age = 14;
if (age >= 14 && age <= 90) {
    console.log("the right age")
} else {
    console.log('the wrong age')
}

if (age < 14 || age > 90){
    console.log("the right age")
} else {
    console.log('the wrong age')
}

if (!(age >= 14 && age <= 90)){
    console.log("the right age")
} else {
    console.log('the wrong age')
}

