// WRITE A FUNCTION THAT PASSES ANY STRING TO CAMELCASE

function toCamelCase(str){
  
  const noDash = str.split('-');
  const noUnderscoreOrDashes = [];
  noDash.forEach(word => {
    const newArrayElement = word.split('_');
    noUnderscoreOrDashes.push(...newArrayElement);
  });

  const finalStr = noUnderscoreOrDashes.map((word, index) => {
    if (index >= 1) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else return word;
  });

  return finalStr.join('');
}

// Testing:
console.log(
  toCamelCase('hello_wait-bye')
);

// I solved it without regex.
// An example using it:

function toCamelCase(str){
  return str.replace(/[^a-z]./gi, word => word.toUpperCase().slice(-1))
}

// Testing:
console.log(
  toCamelCase('hello_wait-bye')
);
