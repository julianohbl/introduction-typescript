const add = (a: number, b: number): number => a + b;
// console.log(add(2, 2));

// Adicionando valor opicional
const addWithOptionalTax = (a: number, b: number, tax?: number): number => {
  if (typeof tax != "undefined") {
    return a + b - tax;
  }
  return a + b;
};
// console.log(addWithOptionalTax(2, 2, 1));
// console.log(addWithOptionalTax(2, 2));

// Adicionando valor default
const applyDiscount = (price: number, percent: number = 5): number => {
  return price - price * (percent / 100);
};
// console.log(applyDiscount(100, 25));

const calcTotal = (name: string, ...numbers: number[]): number => {
  let total = 0;

  numbers.forEach((num) => (total += num));

  return total;
};
console.log(calcTotal("Juliano", 1, 2, 2, 10, 5));
