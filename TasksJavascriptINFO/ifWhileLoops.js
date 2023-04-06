for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}

let i = 0
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}


while (true) {
    let number = prompt("Input number greater than 100", "")
        if (number > 100){
            alert("Great!")
            break;
        } else if (number == null || number == '') {
            alert("Done")
            break;
        } else {
            continue;
        }
}
// alternative solution
let num;
do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);



let numberIsPrime = true;
let number = 5;
    for (let div = 2; div < number; div++){
        if (number % div == 0){
            numberIsPrime = false
            break;
        }
    }
console.log(numberIsPrime)

function checkIfPrime (number) {
    let result = true;
    for (let div = 2; div < number; div++){
        if (number % div == 0){
            result = false
            break;
        }
    }
    return result;
}

let n = 29856;
for (let i = 2; i <= n; i++){
    if (checkIfPrime(i)) {
        console.log(i)
    }
}