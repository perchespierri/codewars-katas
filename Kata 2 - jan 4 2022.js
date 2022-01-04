function narcissistic(value) {

  let isNarcissistic = false;

  function splitToDigit(n){
    // console.log([...n + '']) // [ '1', '0', '0' ]
    return [...n + ''].map(Number)
  }

  const splitNarcissist = splitToDigit(value);
  const powerTo = splitNarcissist.length;
  const elevatedNumbers =
    splitNarcissist.map(element => Math.pow(element, powerTo));
  const finalSum = elevatedNumbers.reduce(((acc, val) => acc + val), 0);
  if (finalSum === value) isNarcissistic = true;
  return isNarcissistic;
}

console.log(narcissistic(153)) // TRUE
console.log(narcissistic(1652)) // FALSE
