function add(num1: number, num2: number, showResult: boolean): number {
  const result = num1 + num2;
  if (showResult) {
    console.log(result, "in add show");
  }
  return result;
}

let number1;

number1 = '20';
const number2 = 2.8;
const printResult = true;

const result = add(number1, number2, printResult);

console.log(result);