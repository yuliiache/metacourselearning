function Calculator () {
    this.readNew = function() {
        this.newA = +prompt("Add the first number", 0);
        this.newB = +prompt("Add the second number", 0);
    };

    this.sumNew = function () {
        return this.newA + this.newB
    };

    this.mulNew = function () {
        return this.newA * this.newB
    };

}
let calculatorNew = new Calculator();
calculatorNew.readNew();

alert( "Sum=" + calculatorNew.sumNew() );
alert( "Mul=" + calculatorNew.mulNew() );


function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt( "Type a number", 0)
    };

}
let accumulator = new Accumulator(1);

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value)