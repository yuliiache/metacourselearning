// let name = prompt('Please enter your name', "John");
// console.log(`Your name is ${name}`)
//
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
//
// alert(Number(a) + Number(b));

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x
    }

    return result;
}

let x = prompt("x?",'');
let n = prompt("n?",'');

if (n <= 0) {
    alert(`Power ${n} is not supported,
     please enter an integer number greater than zero`);
} else {
    alert( pow(x, n) );
}
