var Calculator = /** @class */ (function () {
    function Calculator(c, d) {
        this.a = c;
        this.b = d;
    }
    Calculator.prototype.addition = function () {
        console.log("addition" + (this.a + this.b));
    };
    Calculator.prototype.substract = function () {
        console.log("substract" + (this.a - this.b));
    };
    Calculator.prototype.multiplication = function () {
        console.log("mutiplication" + (this.a * this.b));
    };
    Calculator.prototype.division = function () {
        console.log("division" + (this.a / this.b));
    };
    return Calculator;
}());
var ad = new Calculator(10, 20);
ad.addition();
