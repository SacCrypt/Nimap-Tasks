// Basics Calculator using js concepts.

class Calculator {
  constructor(a, b) {
    this.number1 = a;
    this.number2 = b;
  }
  addition() {
    return this.number1 + this.number2;
  }
  substraction() {
    return this.number1 - this.number2;
  }
  multiplication() {
    return this.number1 * this.number2;
  }
  division() {
    return this.number1 / this.number2;
  }
}

const calcObject = new Calculator(10, 5);

console.log(calcObject.addition());
console.log(calcObject.substraction());
console.log(calcObject.multiplication());
console.log(calcObject.division());
