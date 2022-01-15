// Build a program that returns the sum of the digits
// in a given number, as 11 = 1+1 = 2 or 13 = 1+3 = 4
// BUT..Take 456 for an example: 4+5+6=15=1+5=6, ok?
// This is called DIGITAL ROOT

function digital_root(n) {
  if (n < 10) return n;
  let Nlength = 0;
  while (Nlength !== 1) {
    const splitOfN = [...`${n}`].map(Number);
    const sumOfN = splitOfN.reduce((acc, val) => acc + val);
    const splitOfSum = [...`${sumOfN}`].map(Number);
    Nlength = splitOfSum.length;
    n = sumOfN;
  }
  return n;
}

// Smarter ways I found on the comment sections after I solved the kata.
// Also I cleaned up the second code. But look how beautiful the first code
// one is!

// const digital_root = n => ((n - 1) % 9 + 1);

// function digital_root(n){
//   n = eval(n.toString().split('').join('+'));
//   if (n > 9) return digital_root(n);
//   else return n;
// }

console.log(digital_root(2)); // 2
console.log(digital_root(10)); // 1
console.log(digital_root(15)); // 6
console.log(digital_root(456)); // 15