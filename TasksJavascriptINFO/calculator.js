let calculator = {
    read() {
        this.a = +prompt("Add the first number", 0);
        this.b = +prompt("Add the second number", 0);
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

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