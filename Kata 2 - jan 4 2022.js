function narcissistic(value) {
  function splitToDigit(n){
    return [...n + ''].map(Number) // [ '1', '0', '0' ] into [ 1, 0, 0]
  }
  const splitNarcissist = splitToDigit(value);
  const powerTo = splitNarcissist.length;
  const elevatedNumbers =
    splitNarcissist.map(element => Math.pow(element, powerTo));
  const finalSum = elevatedNumbers.reduce(((acc, val) => acc + val), 0);
  return finalSum === value;
}

// Testing:
console.log(narcissistic(153)) // TRUE
console.log(narcissistic(1652)) // FALSE
